import React, { Component } from 'react'
import { savedPosts } from '../posts.json'
import css from './css/Content.module.css';
import Loader from './Loader.js'
import PostItem from './PostItem.js'

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000);

    }
    nameSearch = (event) => {

        let name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        this.setState({
            posts: filteredPosts

        })
    }

    submit = (event) => {
        event.preventDefault();
    }




    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos </h1>
                    <div>
                        <form onSubmit={this.submit}>
                            <label htmlFor='search-input'>Search: </label>
                            <input type='search' id='search-input' placeholder={'Search by Author'}
                                onChange={(event) => this.nameSearch(event)}></input>
                        </form>
                        <h4>Posts Found: {this.state.posts.length}</h4>
                    </div>

                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                            <PostItem savedPosts={this.state.posts} />
                            : <Loader />
                    }
                </div>

            </div>

        )
    }
}

export default Content