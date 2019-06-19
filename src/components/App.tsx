import React from "react"
import "semantic-ui-css/semantic.min.css"

import { Header, Segment, Container } from "semantic-ui-react"

import ListWithSearch from "./ListWithSearch"
import FormWithTabs from "./FormWithTabs"

// export interface HelloProps {
//   compiler: string;
//   framework: string;
// }

const App = () => (
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

export default App
