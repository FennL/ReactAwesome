import React, { Component } from 'react';

class Condition extends Component {
    state = { 
        isFlag: false,
        names:['Anne','Diva']
    } 
    
    handler = () => { 
        this.setState({
            isFlag:true
        })
    }

    render() { 
        let showView = this.state.isFlag ? <p>Fenn</p> : <p>Please Login</p>
        let { names} = this.state
        return (
            
            <React.Fragment>
                <h1>条件渲染:{showView}</h1>
                <button onClick={this.handler}>登录</button>
                {names.length > 0 ? names.map((element, index) => { 
                    return <h3 key={index}>{ element}</h3>
                })
                    :
                    <div>数据正在渲染...</div>
                }
            </React.Fragment>
        );
    }
}
 
export default Condition;