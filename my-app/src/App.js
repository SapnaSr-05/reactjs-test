import './App.css';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <h2 className="text-center mb-4">Signup Form</h2>
            <Form className="p-4 border rounded shadow-sm bg-light">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="exampleEmail" 
                  placeholder="Enter your email"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                  type="password" 
                  name="password" 
                  id="examplePassword" 
                  placeholder="Enter your password"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input 
                  type="select" 
                  name="select" 
                  id="exampleSelect"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input 
                  type="select" 
                  name="selectMulti" 
                  id="exampleSelectMulti" 
                  multiple 
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input 
                  type="textarea" 
                  name="text" 
                  id="exampleText"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input 
                  type="file" 
                  name="file" 
                  id="exampleFile" 
                  className="form-control-file"
                />
                <FormText color="muted">
                  Upload your file here. (max 2MB)
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option one is this and that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" disabled />{' '}
                    Option three is disabled
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Check me out
                </Label>
              </FormGroup>
              <Button color="primary" className="btn-block">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
