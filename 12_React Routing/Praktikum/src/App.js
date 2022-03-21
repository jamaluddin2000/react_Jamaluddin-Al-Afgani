import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css"
import Home from './pages/Home'
import About from './pages/About';
import AboutTheApp from "./pages/componen/AboutTheApp";
import AboutTheAuthor from "./pages/componen/AboutTheAuthor";
import NotFount from "./pages/pagenotfount";


export default function App(){
  return(
    <>
    <BrowserRouter>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/about/about-app" component={AboutTheApp}/>
          <Route path="/about/about-author" component={AboutTheAuthor}/>
          <Route component={NotFount} />
        
        </Switch>
    </BrowserRouter>

      </>

    )
}