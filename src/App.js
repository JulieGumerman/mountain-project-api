import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";

import { getRoutes } from "./actions/index";

function App({getRoutes}) {

  useEffect(()=> {
    getRoutes();
  }, [getRoutes])

  return (
    <div className="App">
      <h1>Go climbing!!!</h1>
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
