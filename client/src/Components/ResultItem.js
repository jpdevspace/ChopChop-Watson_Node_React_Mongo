import React, { Component } from 'react';
// Components
import Recipe from './Recipe';
import SaveRecipe from './SaveRecipe';

class ResultItem extends Component {
  state = { active: false };

  activeRecipe = () => {
    this.setState({active: !this.state.active})
  }

  render() {

    return (
        <li>
            <h3>{this.props.title}</h3>
            <img src={this.props.image} alt="recipe" />
            <br />
            <button onClick={this.activeRecipe} className="btn btn-info">
              {!this.state.active ? "Cook Recipe " : "Close Recipe "}
              <i className="fas fa-utensil-spoon"></i>
            </button>
            <SaveRecipe user={this.props.user} recipe_id={this.props.recipe_id} />
            <br />
            {this.state.active 
              ?
                <Recipe 
                  handleClose={this.activeRecipe}
                  title={this.props.title} 
                  image={this.props.image} 
                  ingredients={this.props.ingredients} 
                  instructions={this.props.instructions} />
              : 
                null
            }
            
            <hr />
        </li>
    );
  }
}

export default ResultItem;