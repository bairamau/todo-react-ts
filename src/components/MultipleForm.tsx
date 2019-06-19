import React, { useState } from "react"
import { Form, Button } from "semantic-ui-react"

const MultipleForm = () => {
  const [name, setName] = useState<string>("")
  const [itemNames, setItemNames] = useState<string[]>(["", ""])

  const increment = () => {
    setItemNames(itemNames => [...itemNames, ""])
  }

  const decrement = () => {
    setItemNames(prevItemNames =>
      prevItemNames.length === 2
        ? prevItemNames
        : prevItemNames.slice(0, prevItemNames.length - 1)
    )
  }

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setItemNames(prevItems =>
      prevItems.map((item, index) => (name === `${index + 1}` ? value : item))
    )
  }

  const items: React.ReactNode[] = []

  for (let i = 0; i < itemNames.length; i++) {
    items.push(
      <Form.Input
        onChange={handleItemChange}
        name={`${i + 1}`}
        key={`Subitem #${i + 1}`}
        label={`Subitem #${i + 1}`}
      />
    )
  }

  return (
    <Form>
      <Form.Input
        value={name}
        onChange={e => setName(e.target.value)}
        label="To do name"
      />
      {items}
      <Form.Group inline>
        <Button onClick={decrement} type="button" color="vk" icon="minus" />
        <Button onClick={increment} type="button" color="vk" icon="plus" />
        <Button style={{ flex: "1", marginRight: "0" }} type="submit">
          Add
        </Button>
      </Form.Group>
    </Form>
  )
}

export default MultipleForm
