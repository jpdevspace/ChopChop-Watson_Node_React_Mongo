import React, { Component } from 'react';

// Components
import RecipeInstructions from './RecipeInstructions';
import Alert from '../Alert';
import CookCloseBtn from './CookCloseBtn';

// Axios
import API from '../../utils/API';

class Recipe extends Component {
    state = { 
        active: false,
        alert: null
    };
    // Function to open/close cooking instructions
    activeRecipe = () => this.setState({ active: !this.state.active })

    // Function to save a recipe in the user's profile
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

    // Remove alert after 3 seconds
    clearAlert = () => {
        setTimeout(() => {
            this.setState({alert: null})
        }, 3000)
    }

    render() {
        
        const userId = this.props.authedUser;
        const recipeId = this.props.recipe_id;
        // Variable to hold each recipes background image and CSS styling
        const recipeImg = {
            background: `url(${this.props.image}) no-repeat center`,
            backgroundSize: "cover"
        }
        return (
            <div>
                {this.state.alert ? <Alert msg={this.state.alert} /> : null }
                <li>
                    <div className="recipe-prev-card">
                        <div className="recipe-prev-img">
                            <div style={recipeImg}></div>
                        </div>
                        <div className="recipe-prev-text">
                            <h5>{this.props.title}</h5>
                            <CookCloseBtn onOpen={this.activeRecipe} isActive={this.state.active}/>
                            {!this.props.isAuthed ? null 
                                : 
                                    <button 
                                        onClick={() => this.saveRecipe(userId, recipeId)} 
                                        className="save-btn">Save <i className="far fa-bookmark"></i>
                                    </button>
                            }
                        </div>
                        {!this.state.active ? null
                            :
                                <RecipeInstructions
                                    onClose={this.activeRecipe}
                                    ingredients={this.props.ingredients}
                                    instructions={this.props.instructions} />

                        }
                    </div>
                </li>
            </div>
        );
    }
}

export default Recipe;