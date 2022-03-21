import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home"
import AboutTheApp from "./componen/AboutTheApp";
import AboutTheAuthor from "./componen/AboutTheAuthor";


export default function AboutApp(){
  return(
    <>
    <BrowserRouter>

        <Switch>
          <Route path="/about" exact component={Home}/>
          <Route path="/about/about-app"  component={AboutTheApp}/>
          <Route path="/about/about-author"  component={AboutTheAuthor}/>
        </Switch>
    </BrowserRouter>

      </>

    )
}