import React from "react"
import "semantic-ui-css/semantic.min.css"

import { Header, Segment, Container } from "semantic-ui-react"

import ListWithSearch from "./ListWithSearch"
import FormWithTabs from "./FormWithTabs"
import TodoList from "./TodoList"

function createId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

interface PlainTodo {
  id: string
  name: string
  done: boolean
}

interface TimedTodo extends PlainTodo {
  date: string
}

interface MultipleTodo extends PlainTodo {
  items: PlainTodo
}

interface AppProps {}
type AppState = (PlainTodo | TimedTodo | MultipleTodo)[]

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = []
  }

  addPlainTodo(name: string) {
    this.setState(prev => [...prev, { id: createId(), name, done: false }])
  }

  addTimedTodo(name: string, date: string) {
    this.setState(prev => [
      ...prev,
      { id: createId(), name, done: false, date }
    ])
  }

  addMultipleTodo(name: string, itemNames: string[]) {
    this.setState(prev => [
      ...prev,
      {
        id: createId(),
        name,
        done: false,
        items: itemNames.map(itemName => ({
          id: createId(),
          name: itemName,
          done: false
        }))
      }
    ])
  }

  toggleTodo(id: string) {
    this.setState(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
  }

  removeTodo(id: string) {
    this.setState(prev => prev.filter(item => item.id !== id))
  }

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          To do list
        </Header>
        <Container>
          <Segment.Group horizontal raised>
            <FormWithTabs />
            <ListWithSearch />
          </Segment.Group>
        </Container>
      </div>
    )
  }
}

export default App
