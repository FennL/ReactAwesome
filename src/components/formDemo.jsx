import React, { Component } from 'react';


class Form extends Component {
    state = {
        value:""
    } 
    
    handlerSubmit = (e) => { 
        e.preventDefault() // 阻止表单默认跳转
        console.log("已提交")
    }

    handlerChange = (e) => { 
        this.setState({
            value:e.target.value
        })
    }
    render() { 
        return (
            <React.Fragment>
                <form onSubmit={this.handlerSubmit}> { /*表单事件默认跳转，会一闪而过 */}
                    <input type="text" onChange={this.handlerChange} value={this.state.value} />
                    <input type='submit' value="提交"></input>
                </form>
                
            </React.Fragment>
        );
    }
}
 
export default Form;