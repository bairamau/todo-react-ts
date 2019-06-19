import React, { useState } from "react"
import { Segment, Input } from "semantic-ui-react"
import TodoList, { TodoListProps } from "./TodoList"

const ListWithSearch = (props: TodoListProps) => {
  const [filter, setFilter] = useState<string>("")

  return (
    <Segment>
      <Input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        size="large"
        name="Search..."
        icon="search"
        iconPosition="left"
        placeholder="Search..."
        fluid
      />
      <TodoList
        toggleSubItem={props.toggleSubItem}
        removeSubItem={props.removeSubItem}
        toggleHandler={props.toggleHandler}
        removeHandler={props.removeHandler}
        todos={props.todos.filter(todo => todo.name.toLowerCase().includes(filter.toLowerCase()))}
      />
    </Segment>
  )
}
export default ListWithSearch
