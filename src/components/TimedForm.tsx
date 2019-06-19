import React, { useState } from "react"
import { Form } from "semantic-ui-react"

interface IState {
  name: string
  date: string
}

const TimedForm = () => {
  const [fields, setFields] = useState<IState>({ name: "", date: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setFields(prevFields => ({ ...prevFields, [name]: value }))
  }
  
  return (
    <Form>
      <Form.Input
        value={fields.name}
        name="name"
        onChange={handleChange}
        label="To do name"
      />
      <Form.Input
        value={fields.date}
        name="date"
        onChange={handleChange}
        label="Until"
        type="date"
      />
      <Form.Button fluid>Add</Form.Button>
    </Form>
  )
}

export default TimedForm
