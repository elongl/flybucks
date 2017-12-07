import React from 'react'
import { Input, Icon } from 'semantic-ui-react'
const columnFlex = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}
export default props => (
  <div style={columnFlex}>
    {props.type !== 'password' ? (
      <label style={{ fontSize: 16 }}>{props.label}</label>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={{ fontSize: 16 }}>{props.label}</label>
        <a style={{ fontSize: 16, color: '#10d078' }}>Forgot password</a>
      </div>
    )}
    <Input
      iconPosition="left"
      placeholder={props.placeholder}
      type={props.type}
      style={{
        fontSize: 18,
        width: 320,
        marginTop: 5,
        marginBottom: 20
      }}
      onChange={props.onChange}
    >
      <Icon name={props.icon} />
      <input style={{ backgroundColor: '#f9f9f9' }} />
    </Input>
  </div>
)
