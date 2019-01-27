import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component{

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    render() {
        return (
            <header>
                <div className='logo'>Logo is</div> 
                <input type='text'onChange={this.inputChangeHandler} />
            </header>
        )
    }
}


export default Header;