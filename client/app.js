//  Different from index.js file - we can use the Provider, BrowserRouter, Nav, Switch here
import React, { Component } from "react";
import { HashRouter, Route,Switch,Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Search from './components/search';


export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route component={Nav} />
            </div>
            <Switch>
              <Route exact path='/search' render={()=><Search/>}/>
              <Redirect to='/'/>
              </Switch>
        </HashRouter>

        <h1>This is DVDs R Us!</h1>
      </div>
    );
  }
}
