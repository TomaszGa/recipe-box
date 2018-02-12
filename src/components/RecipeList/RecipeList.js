import React from "react";
import { Panel, PanelGroup, Button } from "react-bootstrap";

import Recipe from "./Recipe/Recipe";
function recipeList(props) {
  const recipeList = props.recipes.map((recipe, index) => {
    return (
      <Panel eventKey={index}>
        <Panel.Heading
          active={props.activeIndex === index}
          onClick={() => props.listClick(index)}
          styled
        >
          <Panel.Title toggle>{recipe.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible active={props.activeIndex === index}>
          <p>{recipe.text}</p>
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
