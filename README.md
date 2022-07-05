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

`class`组件和`function`组件。`class`组件有 state 也能写自己的`hook`函数，相对比较好用

## Props 和 State

两者都是存储数据，props 存储的是父组件传下来的数据，子组件里注入父组件里的数据；state 存储的是自己的数据，state 的修改需要使用`setOption`来改

## 生命周期函数

React 框架执行步骤：`getDefalultProps -> getInitialState -> componentWillMount ->render -> componentDidMount`

![image-20220704001306824](https://tva1.sinaimg.cn/large/e6c9d24egy1h3u6ya97i4j20n50p275d.jpg)

- 父传子
  事件在父组件，父组件定义属性`pro={data}`子组件里通过`this.props.pro`就能得到 data 数据
  直接数据流转即可

```javascript
// father
<Props pro={this.state.pro1}/>

// son Props组件
<h2>{this.props.pro}</h2>
```

- 子传父
  事件在子组件，_子组件事件函数调用父组件事件函数`this.props.fatherEvent`_,通过父组件事件函数里的`setState()`可以修改 state
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

## setState 更新同步异步问题

时而同步，时而异步。简单来说如果涉及 React 封装的事件函数(看是不是写在 React 的 render 函数中即可)，就是异步函数；如果使用原生`js`的事件绑定，就又是同步函数。
如何控制同步还是异步？根据`isBatchingUpdates`判断是该直接更新，还是放到队列中延时更新，默认同步直接更新。

当然，也可以在 React 中改成同步，使用`Async`和`Await`,这两个关键词底层是建立在 promise 之上，和回调函数、Promise 一样专责解决异步问题

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

## 列表渲染

简单，注意`key`即可。key 的作用：`setState()`引起重绘的时候，没有 key 的话所有标签重新渲染;有了 key 就只会部分重绘，达到节省资源节省渲染的作用

## 表单

#### 受控组件

组件里的属性来源于`state`，改变通过`setState`

#### 不受控组件

数据比较多的情况下，推荐使用非受控组件

## Ref 和 DOM

ref 就是 DOM 的引用，通常以下步骤获取非受控组件的 DOM

```javascript
this.myRef = React.createRef(); // 1.创建引用
// 2.引用指向标签的ref属性 或者说ref绑定标签 3.通过创建的ref引用来操作标签
<div ref={this.myRef}>Hello<div>
componentDidMount(){
    this.myRef.current.style.color = "red"
}
```

## ant design

安装依赖

```shell
npm install antd --save
```

引入样式和组件

```javascript
import { button } from "antd";
import "antd/dist/antd.css"; // 建议写在全局index.js文件中 因为一直要渲染样式
```

## 按需加载 antd

，引入全量`antd`启动会非常慢，需要按需加载。按需加载有两种方式：

1. 手动按需加载。逐个组件导入`.css`和`.js`
2. 使用`babel-plugin-import`插件。暴露配置，安装插件`babel-plugin-import`插件，在`package.json`中修改`babel`属性如下

```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style":"css"
        }
      ]
    ]
  }
```

实际上和手动按需配置类似，只是`css`文件通过`babel`配置之后变得自动化

## .babelrc 文件

`.babelrc`文件存储了 react 的配置文件,此文件被隐藏，一般是需要命令`npm run eject`才能显示,若是执行的时候报错，则一般是**文件被修改**,解决方案:删掉`.git、.gitignore`,再执行会暴露出`script、config`文件夹 g;或者先`git push`，然后在`npm run eject`

## fetch 请求数据

和`ajax`类似，也是请求数据 API。原生自带

```typescript
fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
```

数据往往是需要变量存放的，然后才考虑渲染，`fetch`返回的数据一般存在`state`里，根据数据的数据结构，state 里定义相应的数据变量来承接。

比如上面接口返回的`banner`是一个数组，数组中是多个对象

```javascript
state = {
  banners: [],
};

fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    this.setState({ // 使用setState将数据写入
        banners:data.banner
    })
  });
```
确实是可以把一组对象的同一组属性渲染为列表内容
