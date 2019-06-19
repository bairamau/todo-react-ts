import React from "react"
import { List } from "semantic-ui-react"
import Plain, { PlainTodo, removeHandler, toggleHandler } from "./PlainTodo"
import Timed, { TimedTodo } from "./TimedTodo"
import Multiple, { MultipleTodo } from "./MultipleTodo"

export interface TodoList {
  todos: (PlainTodo | TimedTodo | MultipleTodo)[]
}

export interface TodoListProps extends TodoList {
  removeHandler: removeHandler
  toggleHandler: toggleHandler
  toggleSubItem(id: string): void
  removeSubItem(id: string): void
}

const TodoList = (props: TodoListProps) => (
  <List divided selection size="big">
    {props.todos.map(todo => {
      if (todo.type === "plain")
        return (
          <Plain
            removeHandler={props.removeHandler}
            toggleHandler={props.toggleHandler}
            todo={todo as PlainTodo}
            key={todo.id}
          />
        )
      if (todo.type === "timed")
        return (
          <Timed
            removeHandler={props.removeHandler}
            toggleHandler={props.toggleHandler}
            todo={todo as TimedTodo}
            key={todo.id}
            {...todo as TimedTodo}
          />
        )
      return (
        <Multiple
          removeHandler={props.removeSubItem}
          toggleHandler={props.toggleSubItem}
          todo={todo as MultipleTodo}
          key={todo.id}
        />
      )
    })}
  </List>
)

export default TodoList
