import React, { Component } from 'react';


class ProxySet extends Component {
    state = {} 
    
    componentDidMount() { 
        fetch("/api/list")
            .then(res => res.json())
            .then(data => { 
                console.log(data)
            })
    }
    render() { 
        return (
            <div>
            </div>
        );
    }
}
 
export default ProxySet;