import React from 'react';

const UserHeader = () => {
    return (
        <div>
            <div className="avatar-container">
                <div className="avatar-img" />
            </div>
            <div className="user-info">
                <h2>Hi NAME!</h2>
                <h3>Number of recipes: 7</h3>
                <h3>Recipes cooked: 2</h3>
            </div>
        </div>
    );
}

export default UserHeader;