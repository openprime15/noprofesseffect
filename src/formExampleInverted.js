import React from "react";
import { Icon, Button, Form, Segment } from "semantic-ui-react";

const FormExampleInverted = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths="equal">
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label="Last name" placeholder="Last name" />
      </Form.Group>
      <Button primary size="huge" type="submit">
        목표 작성
        <Icon name="right arrow" />
      </Button>
    </Form>
  </Segment>
);
export default FormExampleInverted;
