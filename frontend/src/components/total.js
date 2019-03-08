import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Total extends Component {
  render() {
    return <h1>Total: </h1>;
  }
}

const mapStateToProps = state => {
  const { listaArticulos } = state.articles;
  return {
    listaArticulos
  };
};

export default connect(mapStateToProps)(Total);
