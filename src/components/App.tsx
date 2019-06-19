import React from "react"
import "semantic-ui-css/semantic.min.css"

import { Header, Grid, Sticky } from "semantic-ui-react"

import ListWithSearch from "./ListWithSearch"
import FormWithTabs from "./FormWithTabs"
import { TodoListProps } from "./TodoList"

function createId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

interface AppProps {}

class App extends React.Component<AppProps, TodoListProps> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos") || "[]")
    }

    this.addPlainTodo = this.addPlainTodo.bind(this)
    this.addTimedTodo = this.addTimedTodo.bind(this)
    this.addMultipleTodo = this.addMultipleTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

  addPlainTodo(name: string) {
    this.setState(prev => ({
      todos: [
        ...prev.todos,
        { id: createId(), name, done: false, type: "plain" }
      ]
    }))
  }

  addTimedTodo(name: string, date: string) {
    this.setState(prev => ({
      todos: [
        ...prev.todos,
        { id: createId(), name, done: false, date, type: "timed" }
      ]
    }))
  }

  addMultipleTodo(name: string, itemNames: string[]) {
    this.setState(prev => ({
      todos: [
        ...prev.todos,
        {
          id: createId(),
          name,
          done: false,
          type: "multiple",
          items: itemNames.map(itemName => ({
            id: createId(),
            name: itemName,
            done: false,
            type: "plain"
          }))
        }
      ]
    }))
  }

  toggleTodo(id: string) {
    this.setState(prev => ({
      todos: prev.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    }))
  }

  removeTodo(id: string) {
    this.setState(prev => ({
      todos: prev.todos.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          To do list
        </Header>
        <Grid stackable container columns="2">
          <Grid.Column width="5">
            <FormWithTabs
              addPlainHandler={this.addPlainTodo}
              addTimedHandler={this.addTimedTodo}
              addMultipleHandler={this.addMultipleTodo}
            />
          </Grid.Column>
          <Grid.Column width="11">
            <ListWithSearch todos={this.state.todos} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App
