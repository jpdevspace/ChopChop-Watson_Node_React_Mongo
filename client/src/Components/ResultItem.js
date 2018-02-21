import React, { Component } from 'react';

class ResultItem extends Component {
  render() {

    return (
        <li>
            <h3>Title: {this.props.title}</h3>
            <img src={this.props.image} alt="recipe" />
            <h3>Ingredients:</h3><ul>{this.props.ingredients.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
            <h3>Instructions:</h3><ul>{this.props.instructions.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
            <hr />
        </li>
    );
  }
}

export default ResultItem;