import React, { Component } from 'react';

class State extends Component {
    // state存储的是自己的数据，这个数据不能被直接修改，而是需要使用setOption
    state = { 
        count: 10,
        text:true
    } 
    
    // 使用箭头函数可以避免讨论this的指向问题
    add = () => { 
        this.setState({
            count:this.state.count+=1
        })
    }

    sub = () => { 
        this.setState({
            count:this.state.count-=1
        })
    }

    handler = () => { 
        console.log(this);
    }

    changeFlag = () => { 
        this.state.text = !this.state.text
    }
    render() { 

        let showView = this.state.text?"我是中国人":"我不是中国人"
        return ( 
            
            <React.Fragment>
                <h1>组件的State</h1>
                <p>{this.state.count}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.sub}>sub</button>
                
                <button onClick={this.handler}>关于this</button>
                <p>{showView}</p>
                <button onClick={this.changeFlag}>Change</button>
            </React.Fragment>
         );
    }
}
 
export default State;