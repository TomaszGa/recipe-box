import React from "react";

function recipeList(props) {
  const recipeList = props.recipes.map(recipe => {
    return (
      <div>
        <h2>{recipe.name}</h2>
      </div>
    );
  });
  return (
    <div>
      <h1>Hiya</h1>
      {recipeList}
    </div>
  );
}

export default recipeList;
