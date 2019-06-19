import React from "react"
import { List, Checkbox, Button } from "semantic-ui-react"

export interface PlainTodo {
  id: string
  name: string
  done: boolean
  type: string
}

export interface removeHandler {
  (id: string): void
}

export interface toggleHandler {
  (id: string): void
}

interface PlainTodoProps {
  todo: PlainTodo
  removeHandler: removeHandler
  toggleHandler: toggleHandler
}

const Plain = (props: PlainTodoProps) => (
  <List.Item
    onClick={() => props.toggleHandler(props.todo.id)}
    style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gridColumnGap: "6px"
    }}
  >
    <Checkbox checked={props.todo.done} />
    <List.Header
      style={{
        fontWeight: "normal",
        textDecoration: props.todo.done ? "line-through" : "none"
      }}
      content={props.todo.name}
    />
    <Button
      onClick={() => props.removeHandler(props.todo.id)}
      size="small"
      basic
      icon="times"
    />
  </List.Item>
)

export default Plain
