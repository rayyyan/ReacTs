import { JsxElement } from "typescript"

interface TodoListProps<T> {
  items: { id: string; text: string }[]
  test: T
}

const TodoList = (props: TodoListProps<string>) => {
  const { items, test } = props
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id} id={todo.id}>
          {todo.text + " " + test}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
