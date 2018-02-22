import React, { Component } from 'react';
// Components
import Recipe from './Recipe';

class ResultItem extends Component {
  render() {

    return (
        <li>
            <h3>{this.props.title}</h3>
            <img src={this.props.image} alt="recipe" />
            <br />
            <button className="btn btn-info" data-toggle="modal" data-target="#recipe-modal">Cook Recipe <i className="fas fa-utensil-spoon"></i></button>
            <button className="btn btn-info">Save Recipe <i className="far fa-bookmark"></i></button>
            <br />
            <Recipe title={this.props.title} image={this.props.image} ingredients={this.props.ingredients} instructions={this.props.instructions} />
            <hr />
        </li>
    );
  }
}

export default ResultItem;