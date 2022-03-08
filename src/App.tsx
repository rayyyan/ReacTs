import React, { useState } from "react"
import { NewToDo } from "./components/NewToDo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

const App = () => {
  const [list, setList] = useState<Todo[]>([])
  const todoAddHandler = (text: string) => {
    console.log(text)
    // setList(...whatToDo, { id: Math.random().toString(), text })
    setList((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ])
  }
  return (
    <div className="App">
      {/* Add to do s */}
      <NewToDo handler={todoAddHandler} />
      {/*Render to do s */}
      <TodoList items={list} />
    </div>
  )
}

export default App
