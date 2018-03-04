import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Nav from './Nav';

class Layout extends Component{
    render() {
        return(
            <div>
                <Nav isAuth={this.props.isAuthed} />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // Boolean to check if user is authenticated or not
        isAuthed: state.authReducer.token !== null
    }
}

export default connect(mapStateToProps)(Layout);