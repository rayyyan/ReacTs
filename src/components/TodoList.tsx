interface TodoListProps {
  items: { id: string; text: string }[]
  handler: (id: string) => void
}

const TodoList = (props: TodoListProps) => {
  const { items, handler } = props
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id} id={todo.id}>
          <span>{todo.text}</span>
          <button onClick={handler.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
