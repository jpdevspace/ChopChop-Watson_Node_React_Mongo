import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import RecipeInstructions from './RecipeInstructions';
import Alert from '../Alert';
import CookCloseBtn from './CookCloseBtn';

import * as actions from '../../store/actions/index';

// Axios
import API from '../../utils/API';

class Recipe extends Component {
    state = { 
        active: false,
        alert: null
    };
    // Function to open/close cooking instructions
    

    activeRecipe = () => {
        this.setState({ active: !this.state.active })
        this.props.onVoiceSetIndex(null)
    }

    // Function to save a recipe in the user's profile
    saveRecipe = (userId, recipeId) => {
        const userRecipe = { userId, recipeId }
        API.saveRecipe(userRecipe)
            .then(response => {
                this.setState({ alert: 'Recipe Saved!' })
                this.clearAlert();
            })
            .catch(err => console.log(err))
    }

    // Clear alert after 3 secs
    clearAlert = () => setTimeout(() => this.setState({alert: null}), 3000)

    render() {
        
        const userId = this.props.authedUser;
        const recipeId = this.props.recipe_id;
        // Variable to hold each recipes background image and CSS styling
        const recipeImg = {
            background: `url(${this.props.image}) no-repeat center`,
            backgroundSize: "cover"
        }
        // Check to see if this components voiceIndex matches the voice command
        // eslint-disable-next-line
        if (this.props.getVoiceIndex == this.props.voiceIndex) {
            this.activeRecipe();
        }

        return (
            <div>
                {this.state.alert ? <Alert mainPage={true} msg={this.state.alert} /> : null }
                
                <li>
                    <div className="recipe-prev-card">
                        <div className="recipe-prev-img">
                            <div style={recipeImg}></div>
                        </div>
                        <div className="recipe-prev-text">
                            <h5>{this.props.voiceIndex}. {this.props.title}</h5>
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
                                    index={this.props.voiceIndex}
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

const mapStateToProps = state => {

    return {
        getVoiceIndex: state.searchReducer.recipeIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onVoiceSetIndex: voiceIndex => dispatch(actions.selectRecipe(voiceIndex))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recipe);