import React, { Component } from 'react';

// Components
import RecipeInstructions from './RecipeInstructions';
import Alert from '../Alert';

// Axios
import API from '../../utils/API';

class Recipe extends Component {
    state = { 
        active: false,
        alert: null
    };

    activeRecipe = () => {
        this.setState({ active: !this.state.active })
    }

    saveRecipe = (userId, recipeId) => {
        const userRecipe = { userId, recipeId }
        API.saveRecipe(userRecipe)
            .then(response => {
                this.setState({ alert: 'Recipe Saved!' })
                console.log(response)
                this.clearAlert();
            })
            .catch(err => console.log(err))
    }

    // clearAlert = () => {
    //     setTimeout(this.setState({alert: null}), 3000)
    // }

    render() {
        const userId = this.props.authedUser;
        const recipeId = this.props.recipe_id;

        return (
            <div>
                {this.state.alert ? <Alert msg={this.state.alert} /> : null }
                <li>
                    <h3>{this.props.title}</h3>
                    <button onClick={this.activeRecipe} className="btn btn-info">
                        {!this.state.active ? "Cook Recipe " : "Close Recipe "}
                        <i className="fas fa-utensil-spoon"></i>
                    </button>
                    {this.props.isAuthed 
                        ? 
                            <button 
                                onClick={() => this.saveRecipe(userId, recipeId)} 
                                className="btn btn-success">Save 
                                <i className="far fa-bookmark"></i>
                            </button>
                        :
                            null
                    }

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
            </div>
        );
    }
}

export default Recipe;