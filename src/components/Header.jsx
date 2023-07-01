import React from 'react'

const Header = () => {
  return (
    <>
        <div className='header-container'>
            <div className="logo-container">
                <img className="logo" src="/logo.svg" alt="Max Christensen Logo" />
                <h4 className='logo-name'>Max<br/>Christensen </h4>
            </div>
            <div className="header-tab">
                <p>CURRENTLY LOCATED: <br/>41.2924° S, 174.7787° E</p>
            </div>
            <div className="header-tab">
                <p>Max Christensen is a skilled graphic designer and web developer who specializes in minimalist and Memphis design, delivering visually captivating and contemporary designs.</p>
            </div>
            <div className="header-tab">
                <p>CURRENT LOCAL TIME: <br/>12:00:00 NZST(+12)</p>
            </div>
        </div>
    </>
  )
}

export default Header