import React from 'react';

class LoginForm extends React.Component {
  _submit(event) {
    event.preventDefault();
    this.props.submit({
      username: this.refs.username.value,
      password: this.refs.password.value
    })
  }
  render() {
    return (
      <form>
        <input type='text' ref='username' placeholder='Username' />
        <input type='password' ref='password' placeholder='Password' />
        <button onClick={event => this._submit(event)}>Submit</button>
      </form>
    );
  }
}

export default LoginForm;