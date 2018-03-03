import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as actionTypes from '../store/actions';

// Components
import Nav from './Nav';
import SearchBar from './Search/SearchBar';
import RecipesList from './Search/RecipesList';

// Utils
import API from '../utils/API';

class App extends Component {
    // state = {
    //     recipes: [],
    // }

    // Activate SpeechRecognition on page load to always be listening
    componentDidMount() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new window.SpeechRecognition();
        recognition.interimResults = false;

        recognition.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            // Check for keywords
            const ingredients = ['chicken', 'beef', 'pasta', 'fish'];

            // Check for matches in ingredients to search for the specific recipe
            ingredients.forEach(ingredient => {
                if (transcript.includes(ingredient)) {
                    this.handleRecipesSearch(ingredient);
                }
            });
            // Check for matches in commands to perform the action
            if (transcript.includes('scroll down')) {
                window.scrollBy(0, 100);
            }
            if (transcript.includes('scroll up' || 'scroll app')) {
                window.scrollBy(0, -100);
            }
        };
        // Keep the Speech API open
        recognition.addEventListener('end', recognition.start);
        // Start speech API
        recognition.start();
    }

    handleRecipesSearch = ingredient => {
        API.searchRecipes(ingredient)
            .then(dbResponse => {
                const recipes = dbResponse.data;
                this.props.onSearchRecipe(recipes);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <h1>Cheff W</h1>
                <SearchBar onSearch={this.handleRecipesSearch} />
                <RecipesList recipes={this.props.rcpes} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rcpes: state.recipes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchRecipe: (ingrName) => dispatch({ type: actionTypes.SEARCH_RECIPE , payload: ingrName}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
