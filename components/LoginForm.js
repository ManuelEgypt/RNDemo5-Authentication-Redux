import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/authActions";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";

// Actions
// import { login } from "./redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };

  handleSubmit = () => {
    alert("Check my code the states are empty");
  };

  render() {
    const { username, password } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="username"
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
                placeholder="Username"
              />
            </Item>
            <Item last>
              <Input
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                placeholder="Password"
                secureTextEntry
                name="password"
              />
            </Item>
            <Button
              full
              success
              onPress={() =>
                this.props.login(this.state, this.props.navigation)
              }
            >
              <Text>Login</Text>
            </Button>
            <Button
              full
              warning
              onPress={() =>
                this.props.signup(this.state, this.props.navigation)
              }
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  signup: (userData, navigation) =>
    dispatch(actionCreators.signup(userData, navigation)),
  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
