import React, { Component } from 'react';

// 非受控组件获取DOM节点
class RefAndDOM extends Component {
    state = {} 
    myRef = React.createRef();
    componentDidMount() { 
        this.myRef.current.style.color = "red"
        console.log(this.myRef.current);
    }
    render() { 
        return (
            <div ref={this.myRef}>refsAndDOM</div>
        );
    }
}
 
export default RefAndDOM;