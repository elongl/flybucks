import React from 'react'
import { Segment } from 'semantic-ui-react'
import HeaderText from './HeaderText'
import Exchange from './Exchange'

const headerStyle = {
  backgroundImage: `url(/assets/images/background.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

export default ({ authenticated }) => (
  <Segment vertical style={headerStyle}>
    <HeaderText />
    <Exchange authenticated={authenticated} />
  </Segment>
)
