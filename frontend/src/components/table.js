import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteArticle } from "../actions/fieldsActions";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // deleted: "",
      total: 0
    };
    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    let artArray = this.props.listaArticulos;
    let total = 0;
    for (let art of artArray) {
      total += art.precio * art.cantidad;
    }
    this.setState({ total });
  }

  componentDidUpdate(prevProps) {
    if (this.props.listaArticulos !== prevProps.listaArticulos) {
      this.getTotal();
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="5" style={center}>
              {!this.props.actualCliente
                ? "Seleccione cliente"
                : this.props.actualCliente.toUpperCase()}
            </th>
          </tr>
          <tr>
            <th>Artículo</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Total</th>
            <th>Acción...</th>
          </tr>
        </thead>
        <tbody>
          {this.props.listaArticulos.map((articulo, i) => (
            <tr key={i}>
              <td style={center}>{articulo.articulo}</td>
              <td style={center}>{articulo.cantidad}</td>
              <td style={center}>{articulo.precio}</td>
              <td style={center}>{articulo.precio * articulo.cantidad}</td>
              <td>
                <button onClick={() => this.props.deleteArticle(articulo)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style={center}>
              <strong>TOTAL</strong>
            </td>
            <td style={center}>{this.state.total}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

let center = { textAlign: "center" };

const mapStateToProps = state => {
  const { listaArticulos } = state.articles;
  const { actualCliente } = state.fields;
  return {
    listaArticulos,
    actualCliente
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteArticle }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
