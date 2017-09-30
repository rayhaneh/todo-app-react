import React from 'react'
import _ from 'lodash'

const ItemList = ({todos, handleClick}) => {

  const todosList = _.map(todos, todo => (
    <li key={todo.id}>
      <button className="delete-button" onClick={() => handleClick(todo.id)}>
        <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
      </button>
      <span>{todo.text}</span>
    </li>
  ))

  return (
    <ul>
      {todosList}
    </ul>
  )
}

export default ItemList