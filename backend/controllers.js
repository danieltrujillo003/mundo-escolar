const pg = require("pg");
const { Pool, Client } = pg;

const connectionString =
  "postgres://EscolarSuperUser:escolarpass@localhost/escolar";

const getInfo = (req, res) => {
  const pool = new Pool({
    connectionString: connectionString
  });
  pool.query("SELECT NOW()", (err, res) => {
    console.log("pool->", err, res.rows);
    pool.end();
  });
  const client = new Client({
    connectionString: connectionString
  });
  client.connect();
  client.query(`SELECT * FROM ${req.params.table}`, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
      client.end();
    } else {
      res.send({ info: result.rows });
      client.end();
    }
  });
};

const deleteInfo = (req, res) => {
  const pool = new Pool({
    connectionString
  });
  pool.query("SELECT NOW()", (err, res) => {
    console.log("pool->", err, res.rows);
    pool.end();
  });
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
  const pool = new Pool({
    connectionString: connectionString
  });
  pool.query("SELECT NOW()", (err, res) => {
    console.log("pool->", err, res.rows);
    pool.end();
  });
  const client = new Client({
    connectionString: connectionString
    });
    client.connect();
                      req.body.map(article => {
    client.query(
      "INSERT INTO pedidos(codigo_cliente, codigo_articulo, cantidad) VALUES($1, $2, $3)",
      [article.cliente, article.articulo, article.cantidad],
      (err, result) => {
        if (err) {
          res.status(500).send({ err });
        } else {
          res.send({ message: `Artículo agregado` });
        }
        client.end();
      }
    );
  });
};

module.exports = { getInfo, deleteInfo, addInfo };
