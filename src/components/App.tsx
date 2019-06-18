import React from "react"
import { Header, Segment, Container } from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"

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
      <Segment.Group horizontal>
        <Segment>left</Segment>
        <Segment>right</Segment>
      </Segment.Group>
    </Container>
  </div>
)

export default App
