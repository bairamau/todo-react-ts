import React from "react"
import { List, Checkbox, Button } from "semantic-ui-react"
import { PlainTodo, removeHandler, toggleHandler } from "./PlainTodo"

export interface TimedTodo extends PlainTodo {
  date: string
}

interface TimedTodoProps {
  todo: TimedTodo
  removeHandler: removeHandler
  toggleHandler: toggleHandler
}

const Timed = (props: TimedTodoProps) => (
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
    <div>
      <List.Header
        style={{
          fontWeight: "normal",
          textDecoration: props.todo.done ? "line-through" : "none"
        }}
        content={props.todo.name}
      />
      <List.Content>Until {props.todo.date}</List.Content>
    </div>
    <Button onClick={() => props.removeHandler(props.todo.id)} size="small" basic icon="times" />
  </List.Item>
)

export default Timed
