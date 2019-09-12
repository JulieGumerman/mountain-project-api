import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";

import { getRoutes } from "./actions/index";
import RouteInfo from "./components/RouteInfo";

function App({getRoutes, routes, error, isFetching}) {

  useEffect(()=> {
    getRoutes();
  }, [getRoutes])

  return (
    <div className="App">
      <h1>Go climbing!!!</h1>
      <div>
        {routes.map(route => <RouteInfo route={route}/>)}
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    routes: state.routes,
    error: state.error, 
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, {getRoutes})(App);
