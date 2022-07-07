import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";
import Life from './components/Life';
class App extends Component {
  state = {};
  render() {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/admin">admin</Link>
                </li>
            </ul>
        <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
