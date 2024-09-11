import React from 'react'
import Books from './Books.js'

function RenderingLists() {
    const bookList = ["To Kill A Mockingbird", "The Catcher in the Rye", "The Great Gatsby"];
    const books = [{
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
    },
    {
        title: "The great gatsby",
        author: "f scott fitzgerald",
        pages: 218
    },
    {
        title: "The catcher in the rye",
        author: "J.D Salinger",
        pages: 234,
    }
    ]

    return (
        <div>
            {
                bookList.map(book => {
                    return <h2>{book}</h2>
                })}
            <hr />
            {
                books.map(book => {
                    return < Books book={book} />
                })



            }
        </div>
    )
}

export default RenderingLists