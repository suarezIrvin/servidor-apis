const TicketModel = require("../models/ticketModel");
const crypto = require("crypto");

const ticketController = {
  getTickets: async (req, res) => {
    try {
      const [rows] = await TicketModel.getAllTickets();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createTicket: async (req, res) => {
    try {
      const { info, id_horario } = req.body;

      if (!info || !id_horario) {
        return res.status(400).send("Faltan datos requeridos");
      }

      const year = new Date().getFullYear();
      const date = new Date().toISOString().slice(0, 10);
      const randomNumber = crypto.randomBytes(4).toString("hex");
      const code = `UTP-DEH-${date}-${randomNumber}`;

      const status = 0;

      const [result] = await TicketModel.createTicket(
        info,
        code,
        status,
        id_horario
      );
      res.status(201).json({
        message: "Ticket creado exitosamente",
        ticketId: result.insertId,
        code,
      });
    } catch (error) {
      res.status(500).send("Error al crear el ticket");
    }
  },

  /* NEW CODE */
  deleteTicket: async (req, res) => {
    try {
      const { ticket_id } = req.params;
      const [result] = await TicketModel.deleteTicket(ticket_id);
      console.log(result);
      if (result.affectedRows === 0) {
        return res.status(404).send("Ticket not found");
      }
      res.send("Ticket deleted successfully");
    } catch (error) {
      res.status(500).send("Error deleting the ticket");
    }
  },

  getTicketById: async (req, res) => {
    try {
      const { ticket_id } = req.params;
      const [rows] = await TicketModel.getTicketById(ticket_id);
      if (rows.length === 0) {
        return res.status(404).send("Ticket not found");
      }
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTicketsByEvent2: async (req, res) => {
    try {
      const { evento_id } = req.params;
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const [rows] = await TicketModel.getTicketsByEvent2(
        evento_id,
        page,
        limit
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateStatusTicket: async (req, res) => {
    try {
      const { ticket_id } = req.params;
      const { status } = req.body;
      if (status == null) {
        return res.status(400).send("Faltan datos requeridos");
      }
      const [ticket] = await TicketModel.getTicketById(ticket_id);
      if (ticket.length === 0) {
        return res.status(404).send("Ticket not found");
      }
      const [ticketUpdate] = await TicketModel.updateTicket(ticket_id, status);

      if (ticketUpdate.affectedRows === 0) {
        return res.status(400).send("Error updating the ticket");
      }
      res.send("Ticket updated successfully");

    } catch (error) {
      res.status(500).send("Error updating the ticket");
    }
  },
};

module.exports = ticketController;
