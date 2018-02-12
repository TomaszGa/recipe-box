import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

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
      },
      {
        id: 2,
        name: "Dummy recipe 3",
        text: "Hey I am recipe three"
      }
    ],
    expandedRecipe: null,
    addNewWindowOn: false
  };
  render() {
    return (
      <Container>
        <Segment raised>
          <h1>Recipe box app</h1>
          <RecipeList recipes={this.state.recipes} />
        </Segment>
      </Container>
    );
  }
}

export default RecipeBoxApp;
