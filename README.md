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
## setState更新同步异步问题
时而同步，时而异步。简单来说如果涉及React封装的事件函数(看是不是写在React的render函数中即可)，就是异步函数；如果使用原生`js`的事件绑定，就又是同步函数。
如何控制同步还是异步？根据`isBatchingUpdates`判断是该直接更新，还是放到队列中延时更新，默认同步直接更新。


当然，也可以在React中改成同步，使用`Async`和`Await`,这两个关键词底层是建立在promise之上，和回调函数、Promise一样专责解决异步问题

```javascript
async handler(){ 
        await this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        // 使用这种写法确实显示的与console输出的不一致，这是setState异步导致
        // 添加async和await关键字就能改变成输出一致，注意：这里不能使用箭头函数以及需要bind(this)
    }
```

## 条件渲染
应用场景：
1. 根据条件对视图进行渲染
2. 做缺省值
    比如有数据的时候渲染情况以及没有数据时候渲染情况
