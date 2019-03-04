const controllers = require("./controllers");

const routes = app => {
  app.get("/:table", controllers.getInfo);
  app.delete('/:table/:id', controllers.deleteInfo);
  app.post('/:table', controllers.addInfo);
  // app.patch('/:table/:id', controllers.editInfo);  
};

module.exports.routes = routes