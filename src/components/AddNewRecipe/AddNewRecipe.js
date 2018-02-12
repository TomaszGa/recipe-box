import React, { Component } from "react";
import { Button, Modal, Form, TextArea } from "semantic-ui-react";

class AddNewRecipe extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Modal trigger={<Button floated="right">Add new</Button>}>
        <Modal.Header>Add new</Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={e =>
              this.props.formSubmit(e, {
                name: this.state.title,
                text: this.state.content
              })
            }
          >
            <Form.Input
              label="Title"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.Field
              control={TextArea}
              label="Content"
              placeholder="Content"
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddNewRecipe;
