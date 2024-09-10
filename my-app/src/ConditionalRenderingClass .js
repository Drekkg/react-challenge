import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloaded: false,
            isloggedin: true,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isloaded ? "Data is loaded" : "Loading.... "}</h1>

                {this.state.isloggedin ? (<div>
                    <p>Welcome to the site, please complete the steps to continue: </p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                </div>
                ) : (<p>Please sign in....</p>)}

            </div>
        )
    }
}

export default ConditionalRenderingClass 