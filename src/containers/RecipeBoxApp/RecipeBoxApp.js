import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import AddNewRecipe from "../../components/AddNewRecipe/AddNewRecipe";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import RecipeList from "../../components/RecipeList/RecipeList";
class RecipeBoxApp extends Component {
  state = {
    recipes: [],
    expandedRecipe: null,
    addNewWindowOn: false,
    editorOn: false,
    editedRecipe: null,
    editedName: null,
    editedText: null
  };

  componentDidMount() {
    let storedRecipes = null;
    if (localStorage.getItem("recipes")) {
      storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    } else {
      storedRecipes = [
        {
          name: "React.js knowledge",
          text: "Skill, Time, Perservance"
        },
        {
          name: "Web dev job",
          text: "More skill, More time, Social skills"
        },
        {
          name: "Cool single page apps",
          text: "Ideas, React skills, Time"
        },
        {
          name: "Energy to learn more",
          text: "Sleep, Breaks, Relaxation"
        }
      ];
    }
    if (storedRecipes) {
      this.setState({
        recipes: storedRecipes
      });
    }
  }

  updateLocalStorage = () => {
    console.log("updating local storage");
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  };

  handleListClick = id => {
    let newExpandedId = id;
    if (newExpandedId === this.state.expandedRecipe) {
      newExpandedId = null;
    }
    console.log(newExpandedId);
    this.setState({
      expandedRecipe: newExpandedId
    });
  };

  handleListDelete = id => {
    const newRecipes = [...this.state.recipes];
    newRecipes.splice(id, 1);

    this.setState(
      {
        recipes: newRecipes,
        expandedRecipe: null
      },
      this.updateLocalStorage
    );
  };

  handleNewSubmit = (event, data) => {
    event.preventDefault();
    this.handleNewModalToggle();
    const newRecipes = [...this.state.recipes];
    newRecipes.push(data);
    this.setState(
      {
        recipes: newRecipes
      },
      this.updateLocalStorage
    );
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
    const modifiedRecipe = { ...this.state.recipes[this.state.editedRecipe] };
    modifiedRecipe.name = this.state.editedName;
    modifiedRecipe.text = this.state.editedText;
    newRecipes[this.state.editedRecipe] = modifiedRecipe;
    this.setState(
      {
        recipes: newRecipes
      },
      this.updateLocalStorage
    );
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
