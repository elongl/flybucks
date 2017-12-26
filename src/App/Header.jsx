import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from '../Header/Menu'
import HeaderText from '../Header/HeaderText'
import Exchange from '../Header/Exchange'

const headerStyle = {
  backgroundImage: `url(/assets/images/header-background.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '83.5vh',
  textAlign: 'center'
}

export default ({ authenticated }) => (
  <Segment vertical style={headerStyle}>
    <Menu authenticated={authenticated} />
    <div
      style={{
        width: '100%',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <HeaderText />
      <Exchange authenticated={authenticated} />
    </div>
  </Segment>
)
