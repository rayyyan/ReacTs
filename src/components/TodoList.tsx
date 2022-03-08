interface TodoListProps {
  items: { id: string; text: string }[]
  handler: Function
}

const TodoList = (props: TodoListProps) => {
  const { items, handler } = props
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id} id={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handler(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
