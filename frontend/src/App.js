import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css"

import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <Router>
    <div className="App">
    <Header/>
    <div className ='container'>
    <Switch>
      <Route exact path = '/' component = {Home} ></Route>
      <Route exact path ='/about' component = {About}></Route>
      <Route></Route>
    </Switch>
    </div>
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
