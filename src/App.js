import React, { Component } from 'react'
import uuidv4 from 'uuid'
import _ from 'lodash'
import ItemList from './ItemList'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      todos: [],
      newTodoText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: this.state.newTodoText
    }
    this.setState({todos: [...this.state.todos, newTodo], newTodoText: ''})
  }

  handleChange(event) {
    this.setState({newTodoText: event.target.value})
  }

  handleClick(id) {
    var todos = _.reject([...this.state.todos], (todo) => (
      todo.id === id
    ))
    this.setState({todos: todos})
  }

  render() {
    return (
      <div className="App">
        <h2 className={'App-header'}>Simple todo app</h2>
        <form className={'todo-form'} onSubmit={this.handleSubmit}>
          <input
            name="todo"
            value={this.state.newTodoText}
            onChange={this.handleChange}
            autoComplete={'off'}
          />
          <button type="submit">SAVE</button>
        </form>
        <div className="todos-list">
          <ItemList todos={this.state.todos} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
