import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.table,
      tableContent: [],
      price: this.props.price
    };
  }
  infoFetch() {
    const url = `http://localhost:3000/${this.state.table}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tableContent: data.info
        });
      })
      .catch(err => console.log(err));
  }
  componentWillMount() {
    this.infoFetch();
    this.setState({price: this.state.tableContent.precio})
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.table}>{this.props.label}:</label>
        <select
          id={this.props.table}
          name={this.props.table}
          onChange={this.props.ev}
          hey="heyy"
        >
          <option>Seleccione...</option>
          {this.state.tableContent.map((content, i) => (
            <option key={i}>{content.main}</option>
          ))}
        </select>
        <a href="#">editar</a>
      </div>
    );
  }
}

export default Dropdown;
