import React, { Component } from "react";
import { connect } from "react-redux";


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // clientName: "",
      deleted: ""
    };
    // this.showArticles = this.showArticles.bind(this);
    // this.deleteArticle = this.deleteArticle.bind(this);
  }

  // showArticles() {
  //   fetch("http://localhost:3000/articulos")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ articles: data.info });
  //     })
  //     .catch(err => console.log(err));
  // }

  // deleteArticle(index) {
  //   console.log(index)
  //   fetch(`http://localhost:3000/articulos/${index}`, { method: "DELETE" }).then(() => {
  //     console.log("deleted")
  //   });
  // }

  // componentWillMount() {
  //   this.showArticles();
  // }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="5">{this.props.clientName.toUpperCase()}</th>
          </tr>
          <tr>
            <th>Artículo</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Precio total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map((article, i) => (
            <tr key={i}>
              <td>{article.articulo}</td>
              <td>{article.cantidad}</td>
              <td>
                <button onClick={() => this.deleteArticle(article.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.listaArticulos
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ ...fieldsActions, addArticles }, dispatch);
// };

export default connect(mapStateToProps)(Table);
