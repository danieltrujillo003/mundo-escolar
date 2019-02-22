const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) =>
  res.send({
    mensaje: "Bienvenido a la API oficial de Mundo Escolar",
    contenido: {
      "/articulos": "Almacena información de unidades y precios cada artículo",
      "/clientes":
        "Especifica la dirección y el teléfono de todos los clientes",
      "/pedidos":
        "Contiene todos los pedidos realizados por los clientes relacionando cada artículo del pedido y el usuario que lo generó"
    }
  })
);

routes.routes(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));
