import React from "react";
import {Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";


const TodoApp = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}test`} component={asyncComponent(() => import('./TodoApp'))}/>
    </Switch>
  </div>
);

export default TodoApp;
