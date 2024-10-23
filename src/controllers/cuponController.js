const Coupon = require('../models/cuponModel');

const couponController = {
  uploadCoupons: async (req, res) => {
    const cupones = req.body;

    if (!cupones || cupones.length === 0) {
      return res.status(400).json({ error: "No se enviaron cupones válidos" });
    }

    try {
      // Obtener el último ticket_id de la base de datos
      const [result] = await Coupon.getMaxId();
      let maxId = result[0].maxId || 0;

      // Asignar IDs consecutivos a los nuevos cupones
      const cuponesConId = cupones.map(cupon => ({
        id: ++maxId,
        info: cupon.info,
        code: cupon.code,
        status: cupon.status,
      }));

      await Coupon.create(cuponesConId);
      res.status(201).json({ message: "Cupones guardados exitosamente" });
    } catch (error) {
      console.error("Error al insertar cupones:", error);
      res.status(500).json({ error: "Error al insertar cupones" });
    }
  },

  getAllCoupons: async (req, res) => {
    try {
      const [cupones] = await Coupon.getAll();
      res.status(200).json(cupones);
    } catch (error) {
      console.error("Error al obtener los cupones:", error);
      res.status(500).json({ error: "Error al obtener los cupones" });
    }
  }
};

module.exports = couponController;
