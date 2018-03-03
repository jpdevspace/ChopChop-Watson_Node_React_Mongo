import React, { Component } from 'react';

// Components
import RecipeInstructions from './RecipeInstructions';

class Recipe extends Component {
    state = { active: false };

    activeRecipe = () => {
        this.setState({ active: !this.state.active })
    }

    render() {

        return (
            <li>
                <h3>{this.props.title}</h3>
                <button onClick={this.activeRecipe} className="btn btn-info">
                    {!this.state.active ? "Cook Recipe " : "Close Recipe "}
                    <i className="fas fa-utensil-spoon"></i>
                </button>
                <br />
                <img src={this.props.image} alt="recipe" />

                <br />
                {this.state.active
                    ?
                    <RecipeInstructions
                        onClose={this.activeRecipe}
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

export default Recipe;