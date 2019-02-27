import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as fieldsActions from "../actions/fieldsActions";

class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: "",
      articulo: "",
      cantidad: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    name === "clientes"
      ? this.setState({ cliente: value })
      : name === "articulos"
      ? this.setState({ articulo: value })
      : this.setState({ cantidad: value });
  }
  componentDidMount() {
    const {
      fetchArticulos,
      fetchClientes
    } = this.props;

    fetchArticulos();
    fetchClientes();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="clientes">Cliente:</label>
          <select name="clientes" id="clientes">
            <option>Seleccione...</option>
            {this.props.valuesClientes.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        <div>
          <label htmlFor="articulos">Grupo:</label>
          <select name="articulos" id="articulos">
            <option>Seleccione...</option>
            {this.props.valuesArticulos.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        Cantidad:
        <input
          name="Cantidad"
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
  const {
    valuesArticulos,
    valuesClientes
  } = state.fields;

  return {
    valuesArticulos,
    valuesClientes
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...fieldsActions }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm);
