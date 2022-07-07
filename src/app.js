import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";
import Life from "./components/Life";
import NotFound from "./components/NotFound";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
          <li>
            <Link to="/*">NotFound</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/*" element={<NotFound name="fafa" age={23} />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
