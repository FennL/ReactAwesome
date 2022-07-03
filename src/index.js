import React from "react"; // JSX编译时候使用到的
import ReactDOM from "react-dom/client"; // ReactDOM是创建根元素的时候使用到的
import HelloWorld from "./components/helloworld";
const react = "React!!";

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // 先在HTML中找到root标签，然后创建React-Root标签再渲染
//   ReactDOM.createRoot(document.getElementById("root")).render(element);
// }

// setInterval(tick, 1000);

ReactDOM.createRoot(document.getElementById("root")).render(<HelloWorld />);
