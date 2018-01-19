import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import ExchangeField from './exchange/ExchangeField'
import { withRouter } from 'react-router-dom'

export default withRouter(props => {
  return (
    <div
      style={{
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <ExchangeField type="deposit" style={props.style} />
      <Icon
        name="exchange"
        size="big"
        color="yellow"
        style={{ margin: '0rem 1rem', marginBottom: '0.5rem' }}
      />
      <ExchangeField type="receive" style={props.style} />
      <Button
        labelPosition="right"
        content="Exchange"
        icon="right arrow"
        size="huge"
        style={{
          padding: '0.9em 0',
          margin: '1.5rem',
          color: 'white',
          backgroundColor: '#faa61a'
        }}
      />
    </div>
  )
})
