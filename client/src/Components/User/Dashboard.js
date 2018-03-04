import React from 'react';

// Components
import UserBody from './UserBody';
import UserHeader from './UserHeader';

const Dashboard = () => {
    return (
        <div>
            <UserHeader />
            <UserBody />
        </div>
    );
}

export default Dashboard;