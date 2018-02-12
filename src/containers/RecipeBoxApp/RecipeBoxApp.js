import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import AddNewRecipe from "../../components/AddNewRecipe/AddNewRecipe";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import RecipeList from "../../components/RecipeList/RecipeList";
class RecipeBoxApp extends Component {
  state = {
    recipes: [
      {
        name: "Dummy recipe 1",
        text: "Hey I am recipe numero, uno, testytest hey it's a test"
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
    editorOn: false,
    editedRecipe: null,
    editedName: null,
    editedText: null
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
    event.preventDefault();
    this.handleNewModalToggle();
    const newRecipes = [...this.state.recipes];
    newRecipes.push(data);
    this.setState({
      recipes: newRecipes
    });
  };

  handleNewModalToggle = () => {
    this.setState(prevState => ({
      addNewWindowOn: !prevState.addNewWindowOn
    }));
  };

  handleEditorModalToggleOff = () => {
    this.setState(prevState => ({
      editorOn: !prevState.editorOn
    }));
  };

  handleEditorModalToggle = id => {
    console.log(id);
    this.setState({
      editorOn: true,
      editedRecipe: id,
      editedName: this.state.recipes[id].name,
      editedText: this.state.recipes[id].text
    });
  };

  handleEditSubmit = event => {
    event.preventDefault();
    const newRecipes = [...this.state.recipes];
    const modifiedRecipe = newRecipes[this.state.editedRecipe];
    modifiedRecipe.name = this.state.editedName;
    modifiedRecipe.text = this.state.editedText;
    this.handleEditorModalToggleOff();
  };

  handleEditorChange = (e, prop) => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Recipe box app</h1>
        <RecipeList
          recipes={this.state.recipes}
          activeIndex={this.state.expandedRecipe}
          listClick={this.handleListClick}
          listDeleteClick={this.handleListDelete}
          listEditClick={this.handleEditorModalToggle}
        />
        <AddNewRecipe
          formSubmit={this.handleNewSubmit}
          modalShow={this.state.addNewWindowOn}
          modalToggle={this.handleNewModalToggle}
        />
        <EditRecipe
          modalShow={this.state.editorOn}
          modalToggle={this.handleEditorModalToggleOff}
          title={this.state.editedName}
          content={this.state.editedText}
          submitEdit={this.handleEditSubmit}
          editorChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default RecipeBoxApp;
