import React from "react"
import { List, Checkbox, Button } from "semantic-ui-react"
import { PlainTodoProps } from "./PlainTodo"

export interface TimedTodoProps extends PlainTodoProps {
  date: string
}

const TimedTodo = (props: TimedTodoProps) => (
  <List.Item
    style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gridColumnGap: "6px"
    }}
  >
    <Checkbox checked={props.done} />
    <div>
      <List.Header content={props.name} />
      <List.Content>Until {props.date}</List.Content>
    </div>
    <Button basic icon="times" />
  </List.Item>
)

export default TimedTodo
