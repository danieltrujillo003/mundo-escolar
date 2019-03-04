const pg = require("pg");
const { Client } = pg;

const connectionString =
  "postgres://EscolarSuperUser:escolarpass@localhost/escolar";

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
    `DELETE FROM ${req.params.table} WHERE id = $1`,
    [req.params.id],
    (err, result) => {
      res.send({ message: `data with id ${req.params.id} deleted` });
      client.end();
    }
  );
};

const addInfo = (req, res) => {
  const client = new Client({
    connectionString
  });
  client.connect();
  try {
    req.body.map(article => {
      client.query(
        "INSERT INTO pedidos(codigo_cliente, codigo_articulo, cantidad) VALUES($1, $2, $3)",
        [article.cliente, article.articulo, article.cantidad]
      );
    });
    res.send({ message: `Artículo agregado` });
  } catch (error) {
    res.status(500).send({ error });
  }
  client.end();
};

module.exports = { getInfo, deleteInfo, addInfo };
