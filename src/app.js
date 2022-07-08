import React, { Component } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";
import Life from "./components/Life";
import NotFound from "./components/NotFound";
import "./style/navlink.css";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/">admin</NavLink>
          </li>
          <li>
            <NavLink to="/* ">NotFound</NavLink>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/admin/:id?" element={<Admin />}></Route> */}
          <Route exact path="/admin/:id?" element={<Admin />}></Route>
          <Route path="*" element={<NotFound name="fafa" age={23} />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
