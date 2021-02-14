import React, { Component } from 'react'

export default class Clock extends Component {
    render() {
        return (
            <div>

                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>

            </div>
        )
    }
}
