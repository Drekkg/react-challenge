import React from 'react'

function Userdata(props) {
    return (
        <div>
            <h1>{props.isloaded ? "Data is loaded" : "Loading.... "}</h1>
        </div>
    )
}

export default Userdata