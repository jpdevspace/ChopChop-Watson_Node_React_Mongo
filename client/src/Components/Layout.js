import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return(
            <div>
                <header>
                    <nav>
                        <h2> Navigation</h2>
                    </nav>
                </header>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;