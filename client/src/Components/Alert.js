import React from 'react';

const Alert = props => {
    return(
        <div id="custom-alert" className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alert;