import React from "react"
import { List, Checkbox, Button } from "semantic-ui-react"
import Plain, { PlainTodo, removeHandler, toggleHandler } from "./PlainTodo"

export interface MultipleTodo extends PlainTodo {
  items: PlainTodo[]
}

interface MultipleTodoProps {
  todo: MultipleTodo
  removeHandler: removeHandler
  toggleHandler: toggleHandler
}

const Multiple = (props: MultipleTodoProps) => (
  <List.Item
    style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr",
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
    <List.Content
      style={{
        gridRow: "2",
        gridColumn: "2"
      }}
    >
      <List size="small" divided selection>
        {props.todo.items.map(item => (
          <Plain
            todo={item}
            removeHandler={props.removeHandler}
            toggleHandler={props.toggleHandler}
            key={item.id}
          />
        ))}
      </List>
    </List.Content>
  </List.Item>
)

export default Multiple
