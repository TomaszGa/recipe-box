import React from "react";
import {
  Panel,
  PanelGroup,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import "./RecipeList.css";
import Recipe from "./Recipe/Recipe";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function recipeList(props) {
  const recipeList = props.recipes.map((recipe, index) => {
    return (
      <CSSTransition
        classNames="slide"
        timeout={400}
        appear={false}
        key={recipe.text}
      >
        <Panel eventKey={index}>
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
      </CSSTransition>
    );
  });
  return (
    <div>
      <PanelGroup accordion id="accordion-main" activeKey={props.activeIndex}>
        <TransitionGroup className="list-container">
          {recipeList}
        </TransitionGroup>
      </PanelGroup>
    </div>
  );
}

export default recipeList;
