import React, { Component } from "react";
import AddNewRecipe from "../../components/AddNewRecipe/AddNewRecipe";
import RecipeList from "../../components/RecipeList/RecipeList";
class RecipeBoxApp extends Component {
  state = {
    recipes: [
      {
        id: 0,
        name: "Dummy recipe 1",
        text: "Hey I am recipe numero uno"
      },
      {
        id: 1,
        name: "Dummy recipe 2",
        text: "Hey I am recipe two"
      }
    ],
    expandedRecipe: null,
    addNewWindowOn: false
  };
  render() {
    return (
      <div>
        <h1>Recipe box app</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeBoxApp;
