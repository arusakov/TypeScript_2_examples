import * as React from 'react'

namespace ReactExample {

  type CmpState = { x: number, y: string }

  class Cmp extends React.Component<void, CmpState> {

    onChange = e => {
      this.state.x = 1 // Cannot assign because it is a read-only property

      this.setState({
        y: e.target.value
      } as CmpState)
    }
  }
}