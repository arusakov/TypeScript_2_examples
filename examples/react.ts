
import * as React from 'react'

namespace ReactBefore {

  type CmpState = { x: number, y: string }

  class Cmp extends React.Component<void, CmpState> {

    onChange = e => {
      this.state.x = 1

      this.setState({
        y: e.target.value
      } as CmpState)
    }
  }
}