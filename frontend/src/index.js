import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./style/sass/main.scss";
import Form from "./components/form";
import Table from "./components/table";
import Submit from "./components/submit"
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
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  //////////////// react-routes /////////////////////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  render() {
    return (
      <div>
        <h1>
          <a>Mundo Escolar</a>
        </h1>
        <main style={mainStyle}>
          <Form />
          <Table />
        </main>
        <br/>
        <br/>
        <br/>
          <Submit />
      </div>
    );
  }
}

const mainStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "8vw",
  marginRight: "8vw"
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
