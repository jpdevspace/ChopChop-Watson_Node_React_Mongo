import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import '../assets/css/default.min.css';
// import * as actionTypes from '../store/actions/actions';
import * as actions from '../store/actions/index';

// Components
import Layout from './Layout';
import SearchMain from './Containers/SearchMain';
import Signup from './Containers/Auth/Signup';
import Signin from './Containers/Auth/Signin';
import Dashboard from './User/Dashboard';
import Logout from './Containers/Auth/Logout'

// AXIOS
// import API from '../utils/API';

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
                    this.props.onSearchRecipe(ingredient);
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

    render() {
        const routes = (
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/logout" component={Logout} />
                <Route path="/" exact render={() => <SearchMain onSearch={this.props.onSearchRecipe} />} />
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
        onSearchRecipe: (ingredient) => dispatch(actions.searchRecipe(ingredient)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
