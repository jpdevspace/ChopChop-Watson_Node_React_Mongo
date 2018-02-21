import React, { Component } from 'react';

class ResultItem extends Component {
  render() {

    return (
        <div>
            <h3>Label: {this.props.label}</h3>
            <ul>Ingredients: {this.props.ingredients.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
            <p>Link: {this.props.url}</p>
            <img src={this.props.image} alt="recipe" />
        </div>
    );
  }
}

export default ResultItem;