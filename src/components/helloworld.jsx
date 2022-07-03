import React from "react";
import Props from "./propsAndMap";


class HelloWorld extends React.Component { 

    state = {
        nav1: ["python", "java", "javascript"],
        nav2:["web","算法","spring"]
    }

    render() { 
        return (
            // props的数据是定义在父组件中的，无法被修改
            <React.Fragment>
                {/* <h1>Hello World Component</h1> */}
                {/* <Props pro={this.state.nav1} title="路径导航" /> { /*pro、title都是props承接的数据信息*/ }
                {/* <Props pro={this.state.nav2} title="学习导航" /> { /*props标签信息最终都是要被渲染进真正的标签中去的 */} 
            </React.Fragment>
        )
    }
}

export default HelloWorld;