import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // deleted: "",
      tableRows: ""
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({ tableRows: "hey tablerows" });
    {
      console.log(this.state.tableRows);
    }
  }

  componentDidUpdate() {
    console.log("hey update");
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="5">{this.props.actualCliente.toUpperCase()}</th>
          </tr>
          <tr>
            <th>Artículo</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>
              <button onClick={this.clicked}>click</button>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.listaArticulos.map((article, i) => (
            <tr key={i}>
              <td>{article.articulo}</td>
              <td>{article.cantidad}</td>
              <td>{article.precio}</td>
              <td>{article.precio * article.cantidad}</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  const { listaArticulos } = state.articles;
  const { valuesArticulos, actualCliente } = state.fields;
  return {
    listaArticulos,
    valuesArticulos,
    actualCliente
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ ...fieldsActions, addArticles }, dispatch);
// };

export default connect(mapStateToProps)(Table);
