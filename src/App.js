import React from 'react';
import './App.css';
import { connect } from "react-redux";

function App() {
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

export default connect(mapStateToProps, {})(App);
