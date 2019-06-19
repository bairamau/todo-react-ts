import React from "react"
import { Segment, Input } from "semantic-ui-react"
import TodoList, { TodoListProps } from "./TodoList"

const ListWithSearch = (props: TodoListProps) => (
  <Segment>
    <Input
      size="large"
      name="Search..."
      icon="search"
      iconPosition="left"
      placeholder="Search..."
      fluid
    />
    <TodoList todos={props.todos} />
  </Segment>
)

export default ListWithSearch
