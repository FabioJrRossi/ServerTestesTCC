// Function for routing (express).
module.exports = (boardApp) => {
  // Controller import.
  const UseController = require("../controllers/board.controller.js");

  // Endpoints with requisition methods http and callback functions.
  boardApp.get("/board", UseController.findAll);
  boardApp.get("/board/:clientId", UseController.findOne);
  boardApp.post("/board", UseController.create);
  boardApp.put("/board/:clientId", UseController.update);
  boardApp.delete("/board/:clientId", UseController.delete);
};
