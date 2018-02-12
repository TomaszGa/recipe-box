import React from "react";
import { Accordion, Icon, Button } from "semantic-ui-react";

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
          <Button onClick={() => props.listDeleteClick(index)}>Delete</Button>
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
