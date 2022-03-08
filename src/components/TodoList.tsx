import { JsxElement } from "typescript"

interface TodoListProps {
  items: { id: string; text: string }[]
}

const TodoList = (props: TodoListProps) => {
  const { items } = props
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id} id={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
