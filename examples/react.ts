
import * as React from 'react'

namespace ReactBefore {

  type CmpProps = { /* */ y: string }
  type CmpState = { /* */ x: number }

  class Cmp extends React.Component<CmpProps, CmpState> {

    onChange = e => {
      this.state.x = 1
      this.props.y = ''

      this.setState({
        name: e.target.value
      })
    }
  }
}