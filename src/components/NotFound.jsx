import React, { Component } from 'react';

class NotFound extends React.Component {

    

    render() { 
        const { name,age } = this.props;
        return (
            <div>
                404NotFound {name} { age}
            </div>
        );
    }
}
 
export default NotFound;