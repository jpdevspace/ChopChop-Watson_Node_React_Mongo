import React, { Component } from 'react';

// Component 

import CookCloseBtn from '../Search/CookCloseBtn';
import RecipeInstructions from '../Search/RecipeInstructions';
import CreateComment from './CreateComment';

// AXIOS
import API from '../../utils/API';

class UserRecipe extends Component {
    state = { 
        active: false, 
        completed: this.props.recipeCmpled,
        createComment: false,
        comments: this.props.comments
    }
    
    // Function to open/close cooking instructions
    activeRecipe = () => this.setState({ active: !this.state.active })
    
    // Function to handle recipe marked as completed (styling)
    handleRecipeCompleted = recipeTitle => {
        this.props.onRecipeCmpl(recipeTitle);
        this.setState({ completed: true })
    }

    handleCreateComment = comment => {
        const recipeTitle = this.props.recipeTitle;
        const userId = this.props.userId;
        const newComment = { userId, recipeTitle, comment }
        // Save Comment in Database
        API.saveComment(newComment)
            .then(response => {
                this.setState({ comments: response.data })
                this.openAndCloseComment();
            })
            .catch( err => console.log(err))
    }

    // Function to open and close comment section
    openAndCloseComment = () => {
        this.setState({ createComment: !this.state.createComment })
    }

    render() {
        return (
            <li recipe_id={this.props.recipeId}>
                <div className={`recipe-prev-card
                    ${this.state.completed ? "recipe-completed" : ""} `}>
                    <div className="recipe-prev-img">
                        <div style={this.props.imgBg}></div>
                    </div>
                    <div className="recipe-prev-text">
                        <h5>{this.props.recipeTitle}</h5>
                        <CookCloseBtn 
                            onOpen={this.activeRecipe} 
                            isActive={this.state.active}/>
                        <button 
                            onClick={() => this.handleRecipeCompleted(this.props.recipeTitle)}
                            className="complete-btn">Complete 
                            <i className="fas fa-check"></i>
                        </button>
                        <button 
                            onClick={this.openAndCloseComment}
                            className="open-comment-btn">Comment
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button 
                            onClick={() => this.props.onRecipeRmv(this.props.recipeTitle)} 
                            className="remove-btn">Remove 
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                    {!this.state.createComment ? null
                        : <CreateComment onCreateComment={this.handleCreateComment} />
                    }
                    
                    {!this.state.active ? null
                        :
                            <RecipeInstructions
                                comments={this.state.comments}
                                onClose={this.activeRecipe}
                                ingredients={this.props.recipeIngredients}
                                instructions={this.props.recipeInstructions} />
                    }
                </div>
            </li>
        );
    }
    
}

export default UserRecipe;