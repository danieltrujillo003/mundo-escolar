import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./style/sass/main.scss";
import Dropdown from "./components/dropdown";
import Table from "./components/table";
import { rootReducer } from "./reducers";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const middleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: "",
      articulo: "",
      cantidad: 0,
      precio: 0
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
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

 
  render() {
    return (
      <div>
        <h1>
          <a href="/">Artículos</a>
        </h1>
          <Dropdown table="clientes" label="Cliente"/>
        <br />
        <Table clientName={this.state.cliente} />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
