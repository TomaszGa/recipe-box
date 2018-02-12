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
    let newExpandedId = id;
    if (newExpandedId === this.state.expandedRecipe) {
      newExpandedId = null;
    }
    this.setState({
      expandedRecipe: newExpandedId
    });
  };

  handleListDelete = id => {
    console.log(id);
    const newRecipes = [...this.state.recipes];
    newRecipes.splice(id, 1);
    this.setState({
      recipes: newRecipes
    });
  };

  handleNewSubmit = (event, data) => {
    const newRecipes = [...this.state.recipes];
    newRecipes.push(data);
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
            listDeleteClick={this.handleListDelete}
          />
          <AddNewRecipe formSubmit={this.handleNewSubmit} />
        </Segment>
      </Container>
    );
  }
}

export default RecipeBoxApp;
