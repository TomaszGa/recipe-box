import React, { Component } from "react";
import {
  Button,
  Modal,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
class AddNewRecipe extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = (e, prop) => {
    console.log(this.state);
    this.setState({ [prop]: e.target.value });
  };
  render() {
    return (
      <div>
        <Modal show={this.props.modalShow} onHide={this.props.modalToggle}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Form goes here</h1>
            <form
              onSubmit={e =>
                this.props.formSubmit(e, {
                  name: this.state.title,
                  text: this.state.content
                })
              }
            >
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.title}
                  placeholder="Enter title"
                  onChange={e => this.handleChange(e, "title")}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="textarea"
                  value={this.state.content}
                  onChange={e => this.handleChange(e, "content")}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>
          </Modal.Body>
        </Modal>
        <Button onClick={this.props.modalToggle}>Add New</Button>
      </div>
    );
  }
}

export default AddNewRecipe;
