import React from 'react';

export default class SimpleComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Below, is a message...</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
};

