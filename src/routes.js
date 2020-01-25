const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

//Rota para listar desenvolvedores
routes.get("/devs", DevController.index);
//Rota de cadastro de desenvolvedores
routes.post("/devs", DevController.store);
//Rota para buscar desenvolvedores
routes.get("/search", SearchController.index);

module.exports = routes;
