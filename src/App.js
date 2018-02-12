import React, { Component } from "react";
import RecipeBoxApp from "./containers/RecipeBoxApp/RecipeBoxApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeBoxApp />
      </div>
    );
  }
}

export default App;
