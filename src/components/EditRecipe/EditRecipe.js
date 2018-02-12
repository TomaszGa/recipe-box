import React, { Component } from "react";
import {
  Button,
  Modal,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
class EditRecipe extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.modalShow} onHide={this.props.modalToggle}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.props.submitEdit}>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.title}
                  placeholder="Enter title"
                  onChange={e => this.props.editorChange(e, "editedName")}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Content</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="content"
                  value={this.props.content}
                  onChange={e => this.props.editorChange(e, "editedText")}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditRecipe;
