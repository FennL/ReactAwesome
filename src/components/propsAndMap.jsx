import React, { Component } from 'react';


class Props extends Component {
    // 渲染列表方式 this.props.pro实际上就是从父元素传递过来的数组 完全等同于数组 然后对数组渲染 
    // this.props的作用就是可以从组件的属性里拿数据 map渲染的时候记得加key
    render() { 
        return (
            <React.Fragment>
                <h2>{ this.props.title}</h2>
                <ul>
                    {this.props.pro.map((element, index) => { 
                        return (<li key={index}>{ element}</li>)
                    })}
                </ul>
            </React.Fragment>
            
        );
    }
}
 
export default Props;