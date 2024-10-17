const TicketModel = require("../models/ticketModel");
const EventModel = require('../models/eventModel');
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

  scanTicket: async (req, res) => {
    try {
      const { ticketCode } = req.body;

      if (!ticketCode) {
        return res.status(400).send('Faltan datos requeridos');
      }

      const [ ticket ] = await TicketModel.getTicketByCode(ticketCode)

      if (ticket[0]?.status == undefined) {
        return res.status(200).send('Ticket inválido');
      }
      if (ticket[0]?.status === 1) {
        return res.status(200).send('El ticket ya ha sido utilizado');
      }

      const data = { status: 1}
      await TicketModel.update(ticket[0].ticket_id, data)
      const getEvent = await  EventModel.getEventByTicket(ticket[0].ticket_id);
  
      res.status(200).json(getEvent);


    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  checkTicket: async (req, res) => {
    try {
      const { code } = req.body;
  
      // Verificar si el código fue enviado en la solicitud
      if (!code) {
        return res.status(400).json({
          message: 'El código del cupón es requerido.'
        });
      }
  
      // Verificar si el cupón existe en la base de datos
      const [result] = await TicketModel.validateTicket(code); // Consulta el cupón
  
      // Si no hay resultados, el cupón no existe
      if (result.length === 0) {
        return res.status(404).json({
          message: 'El cupón no existe. Por favor, verifica el código ingresado.'
        });
      }
  
      const ticket = result[0];
  
      // Verificar si el cupón ya ha sido utilizado
      if (ticket.redeem === 1) {
        return res.status(200).json({
          message: 'El cupón ya ha sido canjeado.'
        });
      }
  
      // El cupón es válido y no ha sido utilizado
      res.status(200).json({
        message: 'El cupón es válido y puede ser canjeado.'
      });
    } catch (error) {
      // Manejo de errores
      res.status(500).json({
        status: 'error',
        message: 'Error del servidor. Por favor, intenta nuevamente más tarde.',
        error: error.message
      });
    }
  },
  

  redeemTickets: async (req, res) => {
    try {
      const { evento_id, code } = req.body;
  
      if (!evento_id) {
        return res.status(400).json({
          message: 'Se requiere el id del evento',
        });
      }
  
      // Inserta el pago en la base de datos utilizando el modelo TicketModel
      await TicketModel.confirmPayTicket(evento_id);
  
      // Obtener el último ID de pago insertado
      const [rows] = await TicketModel.addPayTicket();
      const payId = rows[0]?.pago_id; // Extraer el valor de pago_id
  
      if (!payId) {
        return res.status(500).json({
          error: 'Error al obtener el ID de pago',
        });
      }
  
      // Actualizar el ticket con el ID de pago
      await TicketModel.updateTicketWithPagoId(payId, code);
  
      // Responder con un mensaje de éxito
      res.json({ message: 'Pago exitoso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  



};

module.exports = ticketController;
