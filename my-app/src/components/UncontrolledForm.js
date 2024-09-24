import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComment = React.createRef();

    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComment.current.value)
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="id_name">Your Name: </label>
                        <input id="id_name" name="name" type="text" ref={this.inputName} />
                    </div>
                    <div>
                        <label htmlFor="id_category">Query Category: </label>
                        <select id="id_category" name="category" ref={this.inputCategory}>
                            <option value="Website issues">Website issue</option>
                            <option value="Order issues">Order issue</option>
                            <option value="General issues">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments</label>
                        <textarea id="id-comments" name="comments" ref={this.inputComment} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm
