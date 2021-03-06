import React, { Component } from 'react'
import { Segment, Transition } from 'semantic-ui-react'
import * as exchangeAPI from '../../../api/exchangeAPI'
import Loader from '../common/Loader'
import Currency from '../home/rates/Currency'

export default class extends Component {
  state = {
    rates: undefined,
    visible: true
  }
  componentDidMount = async () => {
    this.setState({ rates: await exchangeAPI.getRatesLimit(18) })
    this.rotateRatesInterval()
  }
  componentWillUnmount = () => clearInterval(this.ticker)
  rotateRatesInterval = () => {
    this.ticker = setInterval(() => {
      this.setState({ visible: false })
      setTimeout(() => this.rotateRates(), 1000)
    }, 8000)
  }

  rotateRates = () => {
    if (this.state.rates === undefined) return
    const rates = this.state.rates.slice()
    for (let i = 0; i < 6; i++) {
      const current = rates.shift()
      rates.push(current)
    }
    this.setState({ rates }, () => this.setState({ visible: true }))
  }

  render() {
    const { state } = this
    const currencies = state.rates ? (
      state.rates
        .slice(0, 6)
        .map(rate => <Currency key={rate.name} rate={rate} />)
    ) : (
      <Loader />
    )
    return (
      <Segment
        vertical
        inverted
        style={{
          zIndex: -1,
          minHeight: '12rem',
          backgroundColor: '#0d141d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        <Transition
          visible={this.state.visible}
          animation="fade down"
          duration={500}
        >
          <div id="rates">{currencies}</div>
        </Transition>
      </Segment>
    )
  }
}
