// models/escenarioModel.js
const pool = require("../config/connection");

class SceneryModel {

  static async getAll() {
    const [escenarios] = await pool.query("SELECT * FROM Escenario");
    const [asientos] = await pool.query("SELECT * FROM Asientos");
    
    return escenarios.map(escenario => {
      const asientosPorEscenario = asientos.filter(asiento => asiento.numero_asiento.startsWith(`${escenario.escenario_id}-`));
      return { ...escenario, asientos: asientosPorEscenario };
    });
  }

  static async getById(id) {
    const [escenarios] = await pool.query("SELECT * FROM Escenario WHERE escenario_id = ?", [id]);
    if (escenarios.length === 0) {
      throw new Error("Escenario no encontrado");
    }
    return escenarios[0];
  }

  static async getByIdA(escenario_id) {
    const [asientos] = await pool.query("SELECT * FROM Asientos WHERE numero_asiento LIKE ?", [`${escenario_id}-%`]);
    return asientos;
  }

  static async create(asiento, forma, evento_id) {
    const [rows] = await pool.query("INSERT INTO Escenario (asiento, forma, evento_id) VALUES (?, ?, ?)", [asiento, forma, evento_id]);
    const escenarioId = rows.insertId;

    for (let i = 1; i <= asiento; i++) {
      await pool.query("INSERT INTO Asientos (numero_asiento, estado, usuario_id) VALUES (?, 'Disponible', NULL)", [`${escenarioId}-${i}`]);
    }

    return escenarioId;
  }

  static async delete(id) {
    await pool.query("DELETE FROM Asientos WHERE numero_asiento LIKE ?", [`${id}-%`]);
    await pool.query("DELETE FROM Escenario WHERE escenario_id = ?", [id]);
  }

  static async update(id, forma, evento_id) {
    const [result] = await pool.query("UPDATE Escenario SET forma = ?, evento_id = ? WHERE escenario_id = ?", [forma, evento_id, id]);
    return result;
  }

  static async validateEvent(evento_id) {
    const [eventos] = await pool.query("SELECT * FROM Eventos WHERE evento_id = ?", [evento_id]);
    if (eventos.length === 0) {
      throw new Error(`Evento con el id ${evento_id} no encontrado`);
    }
  }
}

module.exports = SceneryModel;