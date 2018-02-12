import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  TextArea
} from "semantic-ui-react";

class AddNewRecipe extends Component {
  state = {};
  render() {
    return (
      <Modal trigger={<Button floated="right">Add new</Button>}>
        <Modal.Header>Add new</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input placeholder="Title" />
            </Form.Field>
            <Form.Field
              control={TextArea}
              label="Content"
              placeholder="Content"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddNewRecipe;
