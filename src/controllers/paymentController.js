const Payment = require("../models/paymentModel");

const paymentController = {
  pay: async (req, res) => {
    const { amount, currency, usuario_id, evento_id, f_inicio_ep, f_fin_ep } = req.body;

    if (amount === undefined || amount === null || currency === undefined || usuario_id === undefined || evento_id === undefined || !f_inicio_ep || !f_fin_ep) {
      return res.status(400).json({ error: 'Faltan campos obligatorios o son inválidos' });
    }

    try {
      if (amount === 0) {
        const pagoId = await Payment.insertPayment(amount, usuario_id, evento_id, f_inicio_ep, f_fin_ep);
        return res.status(200).json({ message: "Pago de 0 completado", pagoId });
      }

      const paymentIntent = await Payment.createPaymetIntent(amount, currency);

      const pagoId = await Payment.insertPayment(amount, usuario_id, evento_id, f_inicio_ep, f_fin_ep);

      if (paymentIntent?.status !== 'succeeded') {
        return res.status(200).json({
          message: "Confirma tu pago",
          paymentIntentId: paymentIntent?.id,
          client_secret: paymentIntent?.client_secret,
        });
      } else {
        return res.status(200).json({ message: "Pago completado" });
      }
    } catch (error) {
      console.error('Error en el método POST:', error);
      const errorMessage = error.raw?.message || error.message || "Error desconocido";
      return res.status(500).json({ message: errorMessage });
    }
  },

  payHistoryByUserId : async (req, res) => {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).send('Falta el parámetro usuario_id');
    }
    
    
    try {
      const result = await Payment.getPaymentHistoryByUserId(userId);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error al obtener el historial:', error);
      res.status(500).send('Error al obtener el historial');
    }
  },
  
  payDetailedHistoryByUserId: async (req, res) => {
    const userId = req.user.id; 

    if (!userId) {
      return res.status(400).send('Falta el parámetro usuario_id');
    }

    try {
      const result = await Payment.getDetailedPaymentHistoryByUserId(userId);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error al obtener el historial detallado:', error);
      res.status(500).send('Error al obtener el historial detallado');
    }
  },

  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.getAllPayments();
      
      if (payments.length === 0) {
        return res.status(404).json({ message: 'No se encontraron pagos.' });
      }

      return res.status(200).json(payments);
    } catch (error) {
      console.error('Error al obtener todos los pagos:', error);
      
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

};




module.exports = paymentController;