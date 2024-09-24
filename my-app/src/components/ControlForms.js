import React, { Component } from 'react'

export class ControlForms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            category: "Website issues",
            comments: "",

        }

    }
    changeHandler = (event) => {
        event.preventDefault()
        this.setState({ name: event.target.value });
    }
    categoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }
    commentsHandler = (event) => {
        this.setState({ comments: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="id_name">Your Name: </label>
                        <input value={this.state.name} id="id_name" name="name" type="text" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="id_category">Query Category: </label>
                        <select value={this.state.category} onChange={this.categoryHandler} id="id_category" name="category">
                            <option value="Website issues">Website issue</option>
                            <option value="Order issues">Order issue</option>
                            <option value="General issues">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments</label>
                        <textarea id="id-comments" name="comments" onChange={this.commentsHandler} value={this.state.comments} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.category}</h2>
                    <h2>{this.state.comments}</h2>
                </div>
            </div>
        )
    }
}

export default ControlForms
