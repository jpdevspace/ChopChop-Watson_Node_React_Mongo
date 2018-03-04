import React from 'react';

const Error = props => {
    return (
        <div>
            <h2 className="text-center">Oooops! 
                <br /> 
                Something went wrong...
            </h2>
            <h3>Error status: </h3>
            <p>{props.status}</p>
            <h3>Error message: </h3>
            <p>{props.msg}</p>
        </div>
    );

}

export default Error;