import React, { Component } from 'react'
import importedNames from './Names.js'

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: importedNames,
        }
    }
    handleChange = (event) => {
        let inputText = event.target.value.toLowerCase();
        console.log(inputText)
        let filteredNames = importedNames.filter((name) => {
            return name.toLowerCase().includes(inputText)

        })
        this.setState({
            names: filteredNames

        })
    }
    render() {
        return (
            <div><h1>Name Search</h1>
                <p>Matching names found : {this.state.names.length}</p>
                <form>
                    <input type="text" placeholder="search names" onChange={this.handleChange}>
                    </input>
                </form>
                <div>We will render names here</div>
                {this.state.names.map(name => {
                    return <p key={name}>{name}</p>
                })
                }
            </div>
        )
    }
}

export default SearchBar