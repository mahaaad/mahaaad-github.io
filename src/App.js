import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import MainPage from "./pages"
import Illustration from "./pages/illustration"


function App(){
        return (
        <Router>
            <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/Illustration" component={Illustration} />
            </Switch>
        </Router>
        )
}


export default App