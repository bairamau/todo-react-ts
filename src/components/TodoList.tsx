import React from "react"
import { List } from "semantic-ui-react"
import PlainTodo, { PlainTodoProps } from "./PlainTodo"
import TimedTodo, { TimedTodoProps } from "./TimedTodo"
import MultipleTodo, { MultipleTodoProps } from "./MultipleTodo"

export interface TodoListProps {
  todos: (PlainTodoProps | TimedTodoProps | MultipleTodoProps)[]
}

const TodoList = (props: TodoListProps) => (
  <List divided selection size="big">
    {props.todos.map(todo => {
      if (todo.type === "plain") return <PlainTodo key={todo.id} {...todo as PlainTodoProps} />
      if (todo.type === "timed") return <TimedTodo key={todo.id} {...todo as TimedTodoProps} />
      return <MultipleTodo key={todo.id} {...todo as MultipleTodoProps} />
    })}
  </List>
)

export default TodoList
