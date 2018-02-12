import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

import AddNewRecipe from "../../components/AddNewRecipe/AddNewRecipe";
import RecipeList from "../../components/RecipeList/RecipeList";
class RecipeBoxApp extends Component {
  state = {
    recipes: [
      {
        name: "Dummy recipe 1",
        text: "Hey I am recipe numero uno"
      },
      {
        name: "Dummy recipe 2",
        text: "Hey I am recipe two"
      },
      {
        name: "Dummy recipe 3",
        text: "Hey I am recipe three"
      }
    ],
    expandedRecipe: 1,
    addNewWindowOn: false,
    editorOn: false
  };

  handleListClick = id => {
    this.setState({
      expandedRecipe: id
    });
  };

  handleNewSubmit = (event, data) => {
    console.log(data);
    const newRecipes = [...this.state.recipes];
    console.log(newRecipes);
    newRecipes.push(data);
    console.log(newRecipes);
    this.setState({
      recipes: newRecipes
    });
  };
  render() {
    return (
      <Container>
        <Segment raised>
          <h1>Recipe box app</h1>
          <RecipeList
            recipes={this.state.recipes}
            activeIndex={this.state.expandedRecipe}
            listClick={this.handleListClick}
          />
          <AddNewRecipe formSubmit={this.handleNewSubmit} />
        </Segment>
      </Container>
    );
  }
}

export default RecipeBoxApp;
