import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isloggedin ? (<div>
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

export default UserMessage