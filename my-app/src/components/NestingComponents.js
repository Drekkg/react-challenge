import React, { Component } from 'react'
import UserMessage from './UserMessage'
import Userdata from './Userdata'

export class NestingComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloaded: true,
            isloggedin: true,
        }
    }
    render() {
        return (
            <div>
                <Userdata isloaded={this.state.isloaded} />
                <UserMessage isloggedin={this.state.isloggedin} />
            </div>
        )
    }
}

export default NestingComponents