import React, { useState } from "react"
import { Segment, Menu } from "semantic-ui-react"

import PlainForm from "./PlainForm"
import TimedForm from "./TimedForm"
import MultipleForm from "./MultipleForm"

const FormWithTabs = () => {
  const [tab, setTab] = useState<number>(0)

  return (
    <Segment>
      <Menu tabular attached="top">
        <Menu.Item onClick={() => setTab(0)} name="Plain" active={tab === 0} />
        <Menu.Item onClick={() => setTab(1)} name="Timed" active={tab === 1} />
        <Menu.Item onClick={() => setTab(2)} name="Multiple" active={tab === 2}/>
      </Menu>
      <Segment basic attached="bottom">
        {[<PlainForm />, <TimedForm />, <MultipleForm />][tab]}
      </Segment>
    </Segment>
  )
}

export default FormWithTabs
