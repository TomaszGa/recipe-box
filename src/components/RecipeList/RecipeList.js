import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

function recipeList(props) {
  const recipeList = props.recipes.map((recipe, index) => {
    return (
      <div key={index}>
        <Accordion.Title
          active={props.activeIndex === index}
          onClick={() => props.listClick(index)}
          styled
        >
          <Icon name="dropdown" />
          {recipe.name}
        </Accordion.Title>
        <Accordion.Content active={props.activeIndex === index}>
          <p>{recipe.text}</p>
        </Accordion.Content>
      </div>
    );
  });
  return (
    <div>
      <h1>Hiya</h1>
      <Accordion>{recipeList}</Accordion>
    </div>
  );
}

export default recipeList;
