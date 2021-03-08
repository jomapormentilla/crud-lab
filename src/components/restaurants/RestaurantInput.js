import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleOnSubmit }>
          <input type="text" name="text" value={ this.state.text } onChange={ this.handleOnChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
