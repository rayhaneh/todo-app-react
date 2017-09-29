import React, { Component } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      todos: [],
      newTodo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({todos: [...this.state.todos, this.state.newTodo], newTodo: ''})
  }

  handleChange(event) {
    this.setState({newTodo: event.target.value})
  }

  handleClick(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({todos: todos})
  }

  render() {
    const todos = this.state.todos.map((todo, index) => (
      <li key={index}>
        <button className="delete-button" onClick={() => this.handleClick(index)}>
          <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
        </button>
        <span>{todo}{index}</span>
      </li>
    ))
    return (
      <div className="App">
        <h2 className={'App-header'}>Simple todo app</h2>
        <form className={'todo-form'} onSubmit={this.handleSubmit}>
          <input
            name="todo"
            value={this.state.newTodo}
            onChange={this.handleChange}
            autoComplete={'off'}
          />
          <button type="submit">SAVE</button>
        </form>
        <div className="todos-list">
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
