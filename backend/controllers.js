const pg = require("pg");
const { Client, Pool } = pg;

const connectionString =
  "postgres://EscolarSuperUser:escolarpass@localhost/escolar";
const pool = new Pool();
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const getInfo = (req, res) => {
  const client = new Client({
    connectionString
  });
  client.connect();

  client.query(`SELECT * FROM ${req.params.table}`, (err, result) => {
    if (err) {
      res.status(500).send({ err });
      client.end();
    } else {
      res.send({ info: result.rows });
      client.end();
    }
  });
};

const deleteInfo = (req, res) => {
  const client = new Client({
    connectionString
  });
  client.connect();
  client.query(
    `DELETE FROM ${req.params.table} WHERE codigo = $1`,
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send({ err });
      } else if (
        (!`SELECT * FROM ${req.params.table} WHERE codigo = $1`,
        [req.params.id])
      ) {
        res.status(404).send({ message: `data with id ${req.params.id} does not exist` });
      } else {
        res.send({ message: `data with id ${req.params.id} deleted` });
      }
      client.end();
    }
  );
};

const addInfo = (req, res) => {
  const { cliente, articulo, cantidad } = req.body;
  const client = new Client({
    connectionString
  });
  client.connect();
  client.query(
    "INSERT INTO pedidos(codigo_cliente, codigo_articulo, cantidad) VALUES($1, $2, $3)",
    [cliente, articulo, cantidad],
    (err, result) => {
      if (err) {
        res.status(500).send({ err });
      } else {
        res.send({ message: `Artículo agregado` });
      }
      client.end();
    }
  );
};

module.exports = { getInfo, deleteInfo, addInfo };
