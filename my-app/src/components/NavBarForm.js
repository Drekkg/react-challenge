import React, { Component } from 'react'
import css from './css/NavBarForm.module.css';

class NavBarForm extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
    }
  }
  clickHandler = () => {
    this.setState((prevState) => ({
      isLoggedIn: prevState.isLoggedIn ? false : true
    }))
  }


  render() {

    return (
      this.state.isLoggedIn ? (
        <div className={css.NavBar}>
          <button onClick={this.clickHandler}>Log In</button>
        </div>) : (
        <div>
          <button onClick={this.clickHandler}>Submit</button>
        </div>
      )
    )
  }
}

export default NavBarForm