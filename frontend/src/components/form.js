import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  fetchArticulos,
  fetchClientes,
  addArticles,
  addTitle
} from "../actions/fieldsActions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: "",
      articulo: "",
      cantidad: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleArticleSubmit(e) {
    e.preventDefault();
    const { cliente, articulo, cantidad } = this.state;
    const precio = this.props.valuesArticulos.find(el => el.main == articulo)
      .precio;
    const nuevoArticulo = {
      cliente,
      articulo,
      cantidad,
      precio
    };
    this.props.addArticles(nuevoArticulo);
  }

  // handleSubmit(e) {
  //   const {
  //     cliente,
  //     articulo,
  //     cantidad
  //   } = this.state;

  //   const newArticle = {
  //     nombre,
  //     unidades_medida,
  //     clasificadores,
  //     iva,
  //     retefuente,
  //     tipo_adquirido,
  //     notas
  //   }

  //   console.log(newArticle)

  //   e.preventDefault();

  //   this.props.postNewArticle(newArticle);
  // }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === "cliente") {
      this.props.addTitle(value);
    }
  }

  componentDidMount() {
    const { fetchArticulos, fetchClientes } = this.props;
    fetchArticulos();
    fetchClientes();
  }

  render() {
    return (
      <form onSubmit={this.handleArticleSubmit}>
        <div>
          <label htmlFor="cliente">Cliente:</label>
          <select name="cliente" id="cliente" onChange={this.handleChange}>
            <option>Seleccione...</option>
            {this.props.valuesClientes.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        <div>
          <label htmlFor="articulo">Artículo:</label>
          <select name="articulo" id="articulo" onChange={this.handleChange}>
            <option>Seleccione...</option>
            {this.props.valuesArticulos.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
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
    );
  }
}

const mapStateToProps = state => {
  const { valuesArticulos, valuesClientes } = state.fields;
  return {
    valuesArticulos,
    valuesClientes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchArticulos, fetchClientes, addArticles, addTitle },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
