import React, { useState } from "react"
import { Segment, Menu } from "semantic-ui-react"

import PlainForm, { PlainFormProps } from "./PlainForm"
import TimedForm, { TimedFormProps } from "./TimedForm"
import MultipleForm, { MultipleFormProps } from "./MultipleForm"

interface FormWithTabsProps {
  addPlainHandler: PlainFormProps["onSubmit"]
  addTimedHandler: TimedFormProps["onSubmit"]
  addMultipleHandler: MultipleFormProps["onSubmit"]
}

const FormWithTabs = (props: FormWithTabsProps) => {
  const [tab, setTab] = useState<number>(0)

  return (
    <Segment>
      <Menu tabular attached="top">
        <Menu.Item onClick={() => setTab(0)} name="Plain" active={tab === 0} />
        <Menu.Item onClick={() => setTab(1)} name="Timed" active={tab === 1} />
        <Menu.Item
          onClick={() => setTab(2)}
          name="Multiple"
          active={tab === 2}
        />
      </Menu>
      <Segment basic attached="bottom">
        {
          [
            <PlainForm onSubmit={props.addPlainHandler} />,
            <TimedForm onSubmit={props.addTimedHandler} />,
            <MultipleForm onSubmit={props.addMultipleHandler} />
          ][tab]
        }
      </Segment>
    </Segment>
  )
}

export default FormWithTabs
