const pool = require('../config/connection');
const Stripe = require("stripe");
const key = process.env.PRIVATE_KEY;
const stripe = new Stripe(key);

const payment = async (req, res) => {
    const { body } = req;
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: body?.amount,
            currency: body?.currency,
            description: "Gaming Keyboard",
            automatic_payment_methods: {
              enabled: true,
              allow_redirects: "never",
            },
          });
      
    
          // Realizar la inserción en la base de datos
          const [rows, fields] = await pool.execute(
            'INSERT INTO Pagos (monto, fecha, tipo_pago_id, usuario_id, evento_id) VALUES (?, CURDATE(), 1, 1, 1)',
            [body.amount]
          );
      
          const pagoId = rows.insertId;
      
          // Insertar en la tabla Pago_Tarjeta
          await pool.execute(
            'INSERT INTO Pago_Tarjeta (numero_tarjeta, fecha_expiracion, cvv, pago_id) VALUES (123, CURDATE(), 123, ?)',
            [pagoId]
          );
      
          // Verificar el estado del paymentIntent y enviar la respuesta correspondiente
          if (paymentIntent?.status !== 'completed') {
            return res.status(200).json({
              message: "Confirma tu pago",
              paymentIntentId: paymentIntent?.id, 
              client_secret: paymentIntent?.client_secret,
              //client_secret o id
            });
          } else {
            return res.status(200).json({ message: "Pago completado" });
          } 

    } catch (error) {
      console.error('Error en el método POST:', error);
      const errorMessage = error.raw?.message || error.message || "Unknown error occurred";
      return res.status(500).json({ message: errorMessage });
    }
}


const confirmPayment = async (req, res) => {
    const { paymentIntentId, paymentMethod } = req.body;
    try{
        const paymentIntent = await stripe.paymentIntents.confirm(
            paymentIntentId,
            { payment_method: paymentMethod }
          );
          res.status(200).send(paymentIntent);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const paymentHistory = async (req, res) => {
  try {
    const [result] = await pool.query(
    `
      SELECT Pagos.*, Pago_Tarjeta.numero_tarjeta, Pago_Tarjeta.fecha_expiracion, Pago_Tarjeta.cvv
      FROM Pagos
      LEFT JOIN Pago_Tarjeta ON Pagos.pago_id = Pago_Tarjeta.pago_id
    `
    );
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al obtener el historial:', error);
    res.status(500).send('Error al obtener el historial');
  }
}

//codigo mejorado

const enhancedPayment = async (req, res) => {
  const { body } = req;

  const { amount, currency, descripcion, usuario_id, evento_id } = body;
  if (!amount || !currency || !descripcion || !usuario_id || !evento_id) {
    return res.status(400).json({ message: "Faltan parámetros necesarios" });
  }

  try{
      const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: currency,
          description: descripcion,
          automatic_payment_methods: {
            enabled: true,
            allow_redirects: "never",
          },
        });
    
  
        // Realizar la inserción en la base de datos
        const [rows, fields] = await pool.execute(
          'INSERT INTO Pagos (monto, fecha, tipo_pago_id, usuario_id, evento_id) VALUES (?, CURDATE(), 1, ?, ?)',
          [amount, usuario_id, evento_id]
        );
    
        const pagoId = rows.insertId;
    
        // Insertar en la tabla Pago_Tarjeta
        await pool.execute(
          'INSERT INTO Pago_Tarjeta (numero_tarjeta, fecha_expiracion, cvv, pago_id) VALUES (424242, CURDATE(), 123, ?)',
          [pagoId]
        );
    
        // Verificar el estado del paymentIntent y enviar la respuesta correspondiente
        if (paymentIntent?.status !== 'completed') {
          return res.status(200).json({
            message: "Confirma tu pago",
            paymentIntentId: paymentIntent?.id, 
            client_secret: paymentIntent?.client_secret,
            //client_secret o id
          });
        } else {
          return res.status(200).json({ message: "Pago completado" });
        } 

  } catch (error) {
    console.error('Error en el método POST:', error);
    const errorMessage = error.raw?.message || error.message || "Unknown error occurred";
    return res.status(500).json({ message: errorMessage });
  }
}

const paymentHistoryByUserID = async (req, res) => {
  const { usuario_id } = req.params;

  if (!usuario_id) {
    return res.status(400).send('Falta el parámetro usuario_id');
  }
  try {
    const [result] = await pool.query(
    `
        SELECT Pagos.*, Pago_Tarjeta.numero_tarjeta, Pago_Tarjeta.fecha_expiracion, Pago_Tarjeta.cvv
        FROM Pagos
        LEFT JOIN Pago_Tarjeta ON Pagos.pago_id = Pago_Tarjeta.pago_id
        WHERE Pagos.usuario_id = ?
    `,
    [usuario_id]
    );
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al obtener el historial:', error);
    res.status(500).send('Error al obtener el historial');
  }
}

module.exports = {
  payment,
    confirmPayment,
    paymentHistory,
    enhancedPayment,
    paymentHistoryByUserID,
  };