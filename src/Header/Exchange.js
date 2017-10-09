import React, { Component } from 'react'
import axios from 'axios'
import { Container, Button, Input, Label, Icon } from 'semantic-ui-react'
export default class extends Component {
  state = {
    youHave: '',
    youGet: '',
    ILStoBTC: ''
  }

  componentDidMount = () => {
    this.getCurrentRate()
    this.youHave.focus()
  }
  getCurrentRate = async () => {
    let { data: { quotes } } = await axios.get(
      'http://www.apilayer.net/api/live?access_key=acafc0bb45eef112ab535b81dfc1116b'
    )
    this.setState({ ILStoBTC: 1 / quotes.USDILS * quotes.USDBTC })
  }
  handleExchangeChange = event => {
    const { ILStoBTC } = this.state
    const have = event.target.value
    const get = have * ILStoBTC
    this.setState({ youHave: have, youGet: get })
  }
  checkIfNumber = event => {
    if (!(event.charCode >= 48 && event.charCode <= 57)) event.preventDefault()
  }

  render() {
    return (
      <Container style={{ paddingTop: '2em' }}>
        <Input
          labelPosition="right"
          placeholder="You Have"
          size="huge"
          style={{ marginRight: '0.5em' }}
          value={this.state.youHave}
          ref={ref => (this.youHave = ref)}
          onChange={this.handleExchangeChange}
          onKeyPress={this.checkIfNumber}
        >
          <Label basic>
            <Icon name="shekel" />
          </Label>
          <input />
          <Label>.00</Label>
        </Input>

        <Icon name="exchange" size="big" />

        <Input
          disabled
          labelPosition="right"
          placeholder="You Get"
          size="huge"
          style={{ marginLeft: '0.5em', marginRight: '1em' }}
          value={this.state.youGet}
        >
          <Label basic>
            <Icon name="bitcoin" />
          </Label>
          <input />
          <Label>.00</Label>
        </Input>

        <Button
          content="Exchange"
          icon="right arrow"
          labelPosition="right"
          color="green"
          size="huge"
          style={{ paddingTop: '0.9em', paddingBottom: '0.9em' }}
          onClick={() => window.alert(this.state.ILStoBTC)}
        />
      </Container>
    )
  }
}
