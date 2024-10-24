const Stripe = require("stripe");
const key = process.env.PRIVATE_KEY;
const stripe = new Stripe(key);
const pool = require("../config/connection");

const Payment =  {
  createPaymetIntent: async (amount, currency) => {
    return await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      description: "Gaming Keyboard",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });
  },

    insertPayment: async (amount, usuario_id, evento_id, f_inicio_ep, f_fin_ep) => {
      const [rows] = await pool.execute(
        `INSERT INTO pagos (monto, fecha, usuario_id, evento_id, f_inicio_ep, f_fin_ep) 
         VALUES (?, CURDATE(), ?, ?, ?, ?)`,
        [amount, usuario_id, evento_id, f_inicio_ep, f_fin_ep]
      );
      return rows.insertId; 
    },


    
    getDetailedPaymentHistoryByUserId: async (userId) => {
      const [result] = await pool.query(
          `
          SELECT 
              p.pago_id,
              p.monto,
              p.fecha AS fecha_pago,
              e.nombre AS nombre_evento,
              e.fecha_inicio,
              e.fecha_termino,
              e.ubicacion,
              h.hora_inicio,
              h.hora_fin,
              t.ticket_id,
              t.info AS info_ticket,
              t.code AS codigo_ticket
          FROM pagos p
          LEFT JOIN eventos e ON p.evento_id = e.evento_id
          LEFT JOIN horarios h ON e.evento_id = h.evento_id
          LEFT JOIN tickets t ON p.pago_id = t.pago_id
          WHERE p.usuario_id = ?
          `,
          [userId]
      );
  
      return result;
  },  

  getAllPayments: async () => {
    const [result] = await pool.query(`SELECT * FROM pagos`);
    return result;
  }

};

module.exports = Payment;
