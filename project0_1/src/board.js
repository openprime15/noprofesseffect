import React from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
  Comment,
  Form
} from "semantic-ui-react";

const Board = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container text>
      <Header as="h3" style={{ fontSize: "2em" }}>
        게시글을 쓰자
      </Header>
      <p style={{ fontSize: "1.33em" }}>여기가 내용이 나올것임</p>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: "2em 0em", textTransform: "uppercase" }}
      ></Divider>
      <Comment>
        <Comment.Avatar src="/images/avatar/small/joe.jpg" />
        <Comment.Content>
          <Comment.Author as="a">김민철</Comment.Author>
          <Comment.Metadata>
            <div>5일 전</div>
          </Comment.Metadata>
          <Comment.Text>햄릿슈형 어디야</Comment.Text>
          <Comment.Actions>
            <Comment.Action>댓글</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </Container>
  </Segment>
);

export default Board;
