import React from "react"
import { List } from "semantic-ui-react"

const items=[1,2,3];

const TodoList = () => (
  <List selection size="large">
    {/* {items.map(num => (
      <List.Item>{num}</List.Item>
    ))} */}
  </List>
)

export default TodoList
