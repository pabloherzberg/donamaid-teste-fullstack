const express = require("express");
const routes = express.Router();
const ClientControllers = require("./controllers/ClientsController");
const ProfessionalsController = require("./controllers/ProfessionalsController");
const AdressController = require("./controllers/AddressController");
const OrdersController = require("./controllers/OrdersController");

//CLIENTS ROUTES
routes.get("/clients", ClientControllers.list);
routes.post("/clients", ClientControllers.create);
routes.get("/client", ClientControllers.index);

//PROFESSIONALS ROUTES
routes.get("/professionals", ProfessionalsController.list);
routes.get("/professional", ProfessionalsController.index);
routes.post("/professionals", ProfessionalsController.create);

//ADDRESS ROUTES
routes.get("/address", AdressController.list);
routes.post("/address", AdressController.create);

//ORDERS ROUTES
routes.get("/orders", OrdersController.list);
routes.post("/orders", OrdersController.create);

module.exports = routes;
