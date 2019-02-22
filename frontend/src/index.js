import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./style/sass/main.scss";
import Dropdown from "./components/dropdown";
import Table from './components/table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: "",
      articulo: "",
      cantidad: 0,
      precio:0
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(e) {
    console.log(e.target)
  }

  // handleSubmit(e) {
  //   const {
  //     nombre,
  //     unidades_medida,
  //     clasificadores,
  //     iva,
  //     retefuente,
  //     tipo_adquirido,
  //     notas
  //   } = this.state;
  //   e.preventDefault();
  //   fetch("http://localhost:3000/articulos", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       nombre,
  //       unidades_medida,
  //       clasificadores,
  //       iva,
  //       retefuente,
  //       tipo_adquirido,
  //       notas
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  //   console.log(this.state);
  // }

  handleChange(e) {
    const { name, value } = e.target;
    name === "clientes"
      ? this.setState({ cliente: value })
      : name === "articulos"
      ? this.setState({ articulo: value })
      : this.setState({ cantidad: value });
      console.log(e.target)
  }
  render() {
    return (
      <div>
        <h1>
          <a href="/">Artículos</a>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <br />
          <Dropdown
            table="clientes"
            label="Cliente"
            ev={this.handleChange}
          />
          <Dropdown
            table="articulos"
            label="Artículo"
            ev={this.handleChange}
          />
          Cantidad:
          <input
            name="cantidad"
            type="number"
            min="0"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Agregar" />
        </form>
        <br />
        <br />
        <Table clientName = {this.state.cliente}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
