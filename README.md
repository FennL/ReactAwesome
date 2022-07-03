## 技术栈

React + Ant Design + TypeScript + UmiJS

## 项目地址

react1 目录下同步到 gitlab，`.git`文件是在 react1 下

## 创建项目

cd react-demo
npx create-react-app react1

## JSX 语法

JSX 语法实际上就是`js`和`HTML`语法的混合，使用`js`的时候需要使用{}写上简单的表达式

## 组件化

组件化其实就是模块化,组件化思想延续了高内聚、低耦合的思想

## Props和State
两者都是存储数据，props存储的是父组件传下来的数据，子组件里注入父组件里的数据；state存储的是自己的数据，state的修改需要使用`setOption`来改

## 生命周期函数
React框架执行步骤：`getDefalultProps -> getInitialState -> componentWillMount ->render -> componentDidMount`

![image-20220704001306824](https://tva1.sinaimg.cn/large/e6c9d24egy1h3u6ya97i4j20n50p275d.jpg)
+ 父传子
事件在父组件，父组件定义属性`pro={data}`子组件里通过`this.props.pro`就能得到data数据
直接数据流转即可
```javascript
// father
<Props pro={this.state.pro1}/>

// son Props组件
<h2>{this.props.pro}</h2>
```
+ 子传父
事件在子组件，*子组件事件函数调用父组件事件函数`this.props.fatherEvent`*,通过父组件事件函数里的`setState()`可以修改state
要通过多个函数调用才可以实现
```javascript
// father
clickChange  = ()=>{
    this.setState({
        cnt:this.cnt+=1
    })
}
<Life changeFather={this.clickChange}/>

// son
clickChange = () =>{
    this.props.changeFather();
}
<button changeSon={this.clickChange}>
```
