import React, { Component } from 'react';

class Messages extends Component {
    
    state = { message: '' }

    componentWillReceiveProps(props) {
        this.setState({ message: props.msg })
        this.clearMsg();
    }

    clearMsg = () => {
        console.log("clearing");
        window.setTimeout( () => this.setState({ message: '' }), 3000);
    }

    render() {
        return(
            <div className="messages">
               {this.state.message}
            </div>
        );
    }
}

export default Messages;