import React from 'react'
import TimeComponent from './TimeComponent'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='header-container'>
            <Link to="/">
            <div className="logo-container">
                    <img className="logo" src="/logo.svg" alt="Max Christensen Logo" />
                    <h4 className='logo-name'>Max<br/>Christensen </h4>
            </div>
            </Link>
            <div className="header-tab">
                <p>CURRENTLY LOCATED: <br/>41.2924° S, 174.7787° E</p>
            </div>
            <div className="header-tab">
                <p>Max Christensen is a skilled graphic designer and web developer who specializes in minimalist and Memphis design, delivering visually captivating and contemporary designs.</p>
            </div>
            <div className="header-tab">
                <p>CURRENT LOCAL TIME: </p>
                <TimeComponent />
            </div>
        </div>
    </>
  )
}

export default Header