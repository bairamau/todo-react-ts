import React, { useState } from "react"
import { Form } from "semantic-ui-react"

export interface PlainFormProps {
  onSubmit(name: string): void
}

const PlainForm = (props: PlainFormProps) => {
  const [name, setName] = useState<string>("")

  return (
    <Form onSubmit={() => props.onSubmit(name)}>
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
