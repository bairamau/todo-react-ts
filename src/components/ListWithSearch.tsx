import React from "react"
import { Segment, Input, Icon } from "semantic-ui-react"
import TodoList from "./TodoList"

const ListWithSearch = () => (
  <Segment>
    <Input iconPosition="left" placeholder="Search..." fluid>
      <input />
      <Icon name="search" />
    </Input>
    <TodoList />
  </Segment>
)

export default ListWithSearch
