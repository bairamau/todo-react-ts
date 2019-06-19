import React from "react"
import { List, Checkbox, Button } from "semantic-ui-react"

export interface PlainTodoProps {
  id: string
  name: string
  done: boolean
  type: string
}

const PlainTodo = (props: PlainTodoProps) => (
  <List.Item
    style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gridColumnGap: "6px"
    }}
  >
    <Checkbox checked={props.done} />
    <List.Header style={{fontWeight: "normal"}} content={props.name} />
    <Button basic icon="times" />
  </List.Item>
)

export default PlainTodo
