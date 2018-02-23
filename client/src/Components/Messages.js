import React, { Component } from 'react';

class Messages extends Component {
    state = { message: ''}

    componentWillReceiveProps() {
        this.clearMsg();
    }

    clearMsg = () => {
        console.log("clearing");
        window.setTimeout(this.setState({message: ''}), 3000);
    }

    render() {
        return(
            <div className="messages">
                {this.props.msg ? <p>{this.props.msg}</p> : null }
            </div>
        );
    }
}

export default Messages;