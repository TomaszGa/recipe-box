import React from "react";
import {
  Panel,
  PanelGroup,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import Recipe from "./Recipe/Recipe";
function recipeList(props) {
  const recipeList = props.recipes.map((recipe, index) => {
    return (
      <Panel key={index} eventKey={index}>
        <Panel.Heading onClick={() => props.listClick(index)}>
          <Panel.Title toggle>{recipe.name}</Panel.Title>
        </Panel.Heading>

        <Panel.Body collapsible>
          <ListGroup>
            {recipe.text.split(",").map((ingredient, index) => {
              return <ListGroupItem key={index}>{ingredient}</ListGroupItem>;
            })}
          </ListGroup>
          <Button onClick={() => props.listDeleteClick(index)}>Delete</Button>
          <Button onClick={() => props.listEditClick(index)}>Edit</Button>
        </Panel.Body>
      </Panel>
    );
  });
  return (
    <div>
      <PanelGroup accordion id="accordion-main">
        {recipeList}
      </PanelGroup>
    </div>
  );
}

export default recipeList;
