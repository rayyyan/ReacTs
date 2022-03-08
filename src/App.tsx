import React, { useState } from "react"
import { NewToDo } from "./components/NewToDo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

const App = () => {
  const [list, setList] = useState<Todo[]>([])
  const todoAddHandler = (text: string) => {
    console.log(text)
    // setList(...whatToDo, { id: Math.random().toString(), text })
    setList([...list, { id: Math.random().toString(), text: text }])
  }
  return (
    <div className="App">
      {/* Add todos */}
      <NewToDo handler={todoAddHandler} />
      {/*Render todos */}
      <TodoList items={list} test="seddik" />
    </div>
  )
}

export default App
