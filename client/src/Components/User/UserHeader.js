import React from 'react';

const UserHeader = props => {
    return (
        <div id="dashboard-header">
            <div className="avatar-container">
                <div className="avatar-img" />
            </div>
            <div className="user-info">
                <h2>Hi {props.name}!</h2>
                <h3>Number of recipes: {props.recipesQ}</h3>
                <h3>Recipes cooked: 2</h3>
            </div>
        </div>
    );
}

export default UserHeader;