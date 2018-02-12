import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

function recipeList(props) {
  const recipeList = props.recipes.map(recipe => {
    return (
      <div>
        <Accordion.Title index={0}>
          <Icon name="dropdown" />
          {recipe.name}
        </Accordion.Title>
        <Accordion.Content>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
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
