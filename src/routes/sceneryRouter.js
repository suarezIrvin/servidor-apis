const express = require("express");
const router = express.Router();
const SceneryController = require("../controllers/sceneryController");

// Create an instance of SceneryController
const sceneryController = new SceneryController();

/**
 * @openapi
 * /api/scenarios:
 *   get:
 *     summary: Get all scenarios
 *     description: Retrieves all scenarios.
 *     tags:
 *       - Scenarios
 *     responses:
 *       200:
 *         description: List of scenarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   escenario_id:
 *                     type: integer
 *                     example: 1
 *                   asiento:
 *                     type: integer
 *                     example: 100
 *                   forma:
 *                     type: string
 *                     example: "Round"
 *                   evento_id:
 *                     type: int
 *                     example: 1
 *                   asientos:
 *                     type: array
 *                     example: []
 *       500:
 *         description: Error retrieving scenarios.
 */
router.get("/", sceneryController.getAll);
router.get("/:id", sceneryController.getById);

/**
 * @openapi
 * /api/scenarios:
 *   post:
 *     summary: Register a new scenario
 *     tags: 
 *       - Scenarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - asiento
 *               - forma
 *               - evento_id
 *             properties:
 *               asiento:
 *                 type: int
 *                 example: 50
 *               forma:
 *                 type: string
 *                 example: "Round"
 *               evento_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       200:
 *         description: Scenario created successfully
 *       500:
 *         description: Error creating the scenario
 */
router.post("/", sceneryController.create);

/**
 * @openapi
 * /api/scenarios/{id}:
 *   delete:
 *     summary: Delete a scenario by its ID
 *     tags: 
 *       - Scenarios
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the scenario to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Scenario deleted successfully
 *       404:
 *         description: Scenario not found
 *       500:
 *         description: Error deleting the scenario
 */
router.delete("/:id", sceneryController.delete);

/**
 * @openapi
 * /api/scenarios/{id}:
 *   put:
 *     summary: Update a scenario
 *     tags: 
 *       - Scenarios
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the scenario to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               forma:
 *                 type: string
 *                 example: "Square"
 *               evento_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Scenario updated successfully
 *       404:
 *         description: Scenario not found
 *       500:
 *         description: Error updating the scenario
 */
router.put("/:id", sceneryController.update);

module.exports = router;
