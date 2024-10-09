// controllers/scenarioController.js
const ScenarioModel = require("../models/sceneryModel");

class SceneryController {
  // Function to get all scenarios with seats
 getAll = async (req, res) => {
  try {
    const scenariosWithSeats = await ScenarioModel.getAll();
    res.json(scenariosWithSeats);
  } catch (error) {
    handleError(res, error);
  }
};

getById = async (req, res) => {
  const { id } = req.params;
  try {
    const scenario = await ScenarioModel.getById(id);
    res.status(200).json(scenario);
  } catch (error) {
    // Verificar si el error es por escenario no encontrado
    if (error.message === "Escenario no encontrado") {
      return res.status(404).json({ error: "Escenario no encontrado" });
    }
    this.handleError(res, error);
  }
};


// Function to create a new scenario
 create = async (req, res) => {
  const { asiento, forma, evento_id } = req.body;
  if (!asiento || !forma || !evento_id) {
    return res.status(400).json({ error: "Faltan Recursos" });
  }
  try {
    await ScenarioModel.validateEvent(evento_id);
    const scenarioId = await ScenarioModel.create(asiento, forma, evento_id);
    res.json({
      message: "Escenario Creado con Exito",
      escenario_id: scenarioId,
      asiento,
      forma,
      evento_id,
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Function to delete a scenario
 delete = async (req, res) => {
  const { id } = req.params;
  try {
    await ScenarioModel.getById(id);
    await ScenarioModel.delete(id);
    res.json({ message: "Scenario and seats deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

// Function to update a scenario
update = async (req, res) => {
  const { id } = req.params;
  const { forma, evento_id } = req.body;

  try {
    const scenario = await ScenarioModel.getById(id);

    const newEventId = evento_id || scenario.evento_id;
    if (evento_id) {
      await ScenarioModel.validateEvent(evento_id);
    }

    const result = await ScenarioModel.update(id, forma || scenario.forma, newEventId);
    if (result.affectedRows > 0) {
      const updatedScenario = await ScenarioModel.getById(id);
      res.status(200).json({
        message: "Scenario updated successfully",
        escenario: updatedScenario,
      });
    } else {
      res.status(400).json({ error: "Could not update the scenario" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

// Auxiliary functions
handleError = (res, error) => {
  console.error(error);
  res.status(500).send({
    message: error.message,
  });
};
}

module.exports = SceneryController;