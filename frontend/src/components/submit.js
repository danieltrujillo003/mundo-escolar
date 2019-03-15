import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterPin: false
    };
    this.askPin = this.askPin.bind(this);
    this.reset = this.reset.bind(this);
  }

  askPin() {
    this.setState({ enterPin: !this.state.enterPin });
  }

  reset() {
    this.setState({ enterPin: false });
    console.log(this.props.listaArticulos)
  }

  render() {
    return (
      <div>
        {!this.state.enterPin ? (
          <button onClick={this.askPin}>Enviar pedido</button>
        ) : (
          <div>
            <button onClick={this.reset}>Confirmar</button>
            <input type="password" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { listaArticulos } = state.articles;
  return {
    listaArticulos
  };
};

export default connect(mapStateToProps)(Submit);
