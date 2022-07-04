import React, { Component } from 'react';
// 本组件演示setState()的同步和异步
class Sync extends Component {
    state = { 
        count:10
    } 
    
    async handler(){ 
        await this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        // 使用这种写法确实显示的与console输出的不一致，这是setState异步导致
        // 
    }
    render() { 
        return (
            <React.Fragment>
                <h1>同步异步demo</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handler.bind(this)}>add count</button>

            </React.Fragment>
        );
    }
}
 
export default Sync;