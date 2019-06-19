import React from "react"
import "semantic-ui-css/semantic.min.css"

import { Header, Grid } from "semantic-ui-react"

import ListWithSearch from "./ListWithSearch"
import FormWithTabs from "./FormWithTabs"
import { TodoList } from "./TodoList"
import { TimedTodo } from "./TimedTodo"
import { MultipleTodo } from "./MultipleTodo"

function createId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

interface AppProps {}

class App extends React.Component<AppProps, TodoList> {
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
    this.toggleSubItem = this.toggleSubItem.bind(this)
    this.removeSubItem = this.removeSubItem.bind(this)
  }

  componentDidMount() {
    const expiredIds: string[] = []
    this.state.todos.forEach(todo => {
      todo.type === "timed" &&
        todo.done === false &&
        new Date((todo as TimedTodo).date).getTime() < Date.now() &&
        expiredIds.push(todo.id)
    })
    this.setState({
      todos: this.state.todos.map(todo =>
        expiredIds.includes(todo.id) ? { ...todo, done: !todo.done } : todo
      )
    })
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
        {
          id: createId(),
          name,
          done: new Date(date).getTime() < Date.now(),
          date,
          type: "timed"
        }
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

  toggleSubItem(id: string) {
    this.setState(prev => {
      const targetMultiple = prev.todos.find(
        todo =>
          todo.type === "multiple" &&
          (todo as MultipleTodo).items.find(todo => todo.id == id)
      )
      if (targetMultiple) {
        const updatedMultiple = {
          ...targetMultiple,
          items: (targetMultiple as MultipleTodo).items.map(item =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        }
        return {
          todos: prev.todos.map(todo =>
            todo.id === targetMultiple.id ? updatedMultiple : todo
          )
        }
      }
      return prev
    })
  }

  removeSubItem(id: string) {
    this.setState(prev => {
      const targetMultiple = prev.todos.find(
        todo =>
          todo.type === "multiple" &&
          (todo as MultipleTodo).items.find(todo => todo.id == id)
      )
      if (targetMultiple) {
        const updatedMultiple = {
          ...targetMultiple,
          items: (targetMultiple as MultipleTodo).items.filter(
            item => item.id !== id
          )
        }
        if (updatedMultiple.items.length === 0)
          return {
            todos: prev.todos.filter(item => item.id !== targetMultiple.id)
          }
        return {
          todos: prev.todos.map(todo =>
            todo.id === targetMultiple.id ? updatedMultiple : todo
          )
        }
      }
      return prev
    })
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
            <ListWithSearch
              removeSubItem={this.removeSubItem}
              toggleSubItem={this.toggleSubItem}
              removeHandler={this.removeTodo}
              toggleHandler={this.toggleTodo}
              todos={this.state.todos}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App
