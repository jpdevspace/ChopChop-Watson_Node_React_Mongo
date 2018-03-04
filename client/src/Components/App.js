import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import * as actionTypes from '../store/actions/actions';

// Components
import Layout from './Layout';
import SearchMain from './Search/SearchMain';
import Signup from './Containers/Auth/Signup';
import Signin from './Containers/Auth/Signin';

// AXIOS
import API from '../utils/API';

class App extends Component {
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
        const routes = (
            <Switch>
                <Route exact path="/" render={() => <SearchMain onSearch={this.handleRecipesSearch} />} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
            </Switch>
        )

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        rcpes: state.searchReducer.recipes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchRecipe: (ingrName) => dispatch({ type: actionTypes.SEARCH_RECIPE , payload: ingrName}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
