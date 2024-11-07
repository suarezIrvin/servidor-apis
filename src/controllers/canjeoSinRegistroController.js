const CanjeoSinRegistroModel = require("../models/canjeoSinRegistroModel");

const CanjeoSinRegistroController = {
  async redeemTicket(req, res) {
    const { code, id_horario } = req.body; // Agrega id_horario

    try {
      // Verificar si el ticket existe y obtener información
      const [ticketRows] = await CanjeoSinRegistroModel.getTicketByCode(code);
      if (ticketRows.length === 0) {
        return res.status(404).json({ message: "Ticket no encontrado" });
      }

      const ticket = ticketRows[0];

      // Verificar el estado del ticket (si ya ha sido canjeado)
      if (ticket.redeem === 1) {
        return res.status(400).json({ message: "El ticket ya ha sido canjeado" });
      }

      // Actualizar el ticket a canjeado e incluir el horario
      await CanjeoSinRegistroModel.updateTicketToRedeemed(ticket.ticket_id, id_horario);

      // Devolver respuesta exitosa con el código de ticket
      return res.status(200).json({ message: "Ticket canjeado exitosamente", ticketCode: ticket.code });
    } catch (error) {
      console.error("Error al canjear el ticket:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }
};

module.exports = CanjeoSinRegistroController;
