import React, { useState } from "react"
import { Form } from "semantic-ui-react"

const PlainForm = () => {
  const [name, setName] = useState<string>("")

  return (
    <Form>
      <Form.Input
        onChange={e => setName(e.target.value)}
        value={name}
        label="To do name"
      />
      <Form.Button fluid>Add</Form.Button>
    </Form>
  )
}
export default PlainForm
