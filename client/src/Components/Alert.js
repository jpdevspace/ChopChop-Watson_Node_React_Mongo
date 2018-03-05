import React from 'react';

const Alert = props => {
    return(
        <div id="custom-alert">
            <p>{props.msg}</p>
        </div>
    );
}

export default Alert;