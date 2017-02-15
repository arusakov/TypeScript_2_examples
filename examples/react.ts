
import * as React from 'react'

namespace ReactBefore {

  type Props = { /* */ y: string }
  type State = { /* */ x: number }

  class Cmp extends React.Component<Props, State> {

    onChange = e => {
      this.state.x = 1
      this.props.y = ''

      this.setState({
        name: e.target.value
      })
    }
  }
}