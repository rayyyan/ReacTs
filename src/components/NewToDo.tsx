import React, { useRef } from "react"
interface NewToDoProps {
  handler: Function
}
export const NewToDo = (props: NewToDoProps) => {
  const { handler } = props
  const textInput = useRef<HTMLInputElement>(null)
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInput.current!.value
    handler(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Tod Text</label>
        <input type="text" id="todo-text" ref={textInput}></input>
      </div>
      <button type="submit"> ADD TODO</button>
    </form>
  )
}
