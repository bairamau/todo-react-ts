import React from "react"
import { List, Checkbox, Button } from "semantic-ui-react"
import PlainTodo, { PlainTodoProps } from "./PlainTodo"

export interface MultipleTodoProps extends PlainTodoProps {
  items: PlainTodoProps[]
}

const MultipleTodo = (props: MultipleTodoProps) => (
  <List.Item
    style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gridColumnGap: "6px"
    }}
  >
    <Checkbox checked={props.done} />
    <List.Header content={props.name} />
    <Button basic icon="times" size="small" />
    <List.Content
      style={{
        gridRow: "2",
        gridColumn: "2"
      }}
    >
      <List selection>
        {props.items.map(item => (
          <PlainTodo key={item.id} {...item} />
        ))}
      </List>
    </List.Content>
  </List.Item>
)

export default MultipleTodo
