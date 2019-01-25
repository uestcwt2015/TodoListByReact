import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.text.trim()) return;
    this.props.addTodo(parseInt(Math.random() * 1000), this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="input-container">
        <input 
          name="todo" 
          type="text" 
          value={ this.state.text } 
          onChange={ this.handleChange }
        />
        <button onClick={ this.handleClick }>Add Todo</button>
      </div>
    );
  }
};

const mapDispatchToProps = {
  addTodo: (id, value) => addTodo(id, value)
};

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);