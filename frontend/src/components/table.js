import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteArticle } from "../actions/fieldsActions";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // deleted: "",
      tableRows: "",
      counter: 0,
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

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="5">
              {!this.props.actualCliente
                ? "Seleccione cliente"
                : this.props.actualCliente.toUpperCase()}
            </th>
          </tr>
          <tr>
            <th>Artículo</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>
              <button onClick={this.getTotal}>click</button>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.listaArticulos.map((articulo, i) => (
            <tr key={i}>
              <td>{articulo.articulo}</td>
              <td>{articulo.cantidad}</td>
              <td>{articulo.precio}</td>
              <td>{articulo.precio * articulo.cantidad}</td>
              <td>
                <button onClick={() => this.props.deleteArticle(articulo)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <strong>TOTAL</strong>
            </td>
            <td>{this.state.total}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

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
