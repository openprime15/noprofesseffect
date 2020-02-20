import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Icon,
  Button,
  Form,
  Segment,
  Container,
  Header
} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h2"
      content="목표를 입력하세요."
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class Main extends Component {
  example2 = () => {
    this.props.example();
  };

  example3 = () => {
    alert();
  };

  render() {
    return (
      <div>
        <HomepageHeading />
        <Container text>
          <Segment inverted>
            <Form inverted>
              <Form.Group widths="equal">
                <Form.Input fluid label="닉네임" placeholder="nickName" />
                <Form.Input
                  fluid
                  label="목표"
                  placeholder="Goal"
                  ref={ref => (this._inputBoardComments = ref)}
                />
              </Form.Group>
            </Form>
          </Segment>
          <input
            ref={ref => (this._inputElement = ref)}
            placeholder="enter task"
          ></input>
          <Button
            primary
            size="huge"
            type="submit"
            onClick={() => {
              this.example2();
            }}
          >
            목표 작성
            <Icon name="right arrow" />
          </Button>
          <button onClick={this.example3}>연습</button>
        </Container>
      </div>
    );
  }
}
export default Main;
