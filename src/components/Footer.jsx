import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="header-tab">
            <Link to="/">Projects</Link>
        </div>
        <div className="header-tab">
            <Link to="about"><p>About</p></Link>
        </div>
        <div className="header-tab">
            
        </div>
        <div className="header-tab">
            <div className="socials">
                <a target='_blank' href="https://github.com/maxchristensen"><svg viewBox="0 0 384 378.08"><defs></defs><g id="c"><path className="d" d="m192,0C85.97,0,0,85.97,0,192c0,89.97,61.95,165.25,145.47,186.08-.9-2.59-1.47-5.6-1.47-9.33v-32.82h-24.13c-13.14,0-24.82-5.65-30.48-16.14-6.29-11.66-7.38-29.5-22.96-40.42-4.62-3.63-1.1-7.78,4.22-7.22,9.84,2.78,18,9.54,25.68,19.55,7.65,10.03,11.25,12.3,25.54,12.3,6.93,0,17.3-.4,27.06-1.94,5.25-13.33,14.32-25.6,25.41-31.39-63.94-6.58-94.45-38.38-94.45-81.57,0-18.59,7.92-36.58,21.38-51.73-4.42-15.04-9.97-45.71,1.7-57.39,28.77,0,46.16,18.66,50.34,23.7,14.34-4.91,30.08-7.7,46.62-7.7s32.38,2.78,46.75,7.73c4.13-5.01,21.54-23.73,50.37-23.73,11.71,11.7,6.1,42.5,1.63,57.5,13.38,15.12,21.25,33.06,21.25,51.62,0,43.15-30.46,74.94-94.3,81.55,17.57,9.17,30.38,34.93,30.38,54.34v43.74c0,1.66-.37,2.86-.56,4.29,74.82-26.22,128.56-97.26,128.56-181.04C384,85.97,298.03,0,192,0Z"/></g></svg></a>
                <a target='_blank' href="https://www.instagram.com/maxthecreativecowboy/"><svg viewBox="0 0 79.17 79.17"><defs></defs><g id="c"><path className="d" d="m23.96,0C10.75,0,0,10.75,0,23.96v31.25c0,13.21,10.75,23.96,23.96,23.96h31.25c13.21,0,23.96-10.75,23.96-23.96v-31.25c0-13.21-10.75-23.96-23.96-23.96h-31.25Zm36.46,14.58c2.3,0,4.17,1.86,4.17,4.17s-1.86,4.17-4.17,4.17-4.17-1.87-4.17-4.17,1.86-4.17,4.17-4.17Zm-20.83,4.17c11.49,0,20.83,9.35,20.83,20.83s-9.35,20.83-20.83,20.83-20.83-9.35-20.83-20.83,9.35-20.83,20.83-20.83Zm0,6.25c-8.05,0-14.58,6.53-14.58,14.58s6.53,14.58,14.58,14.58,14.58-6.53,14.58-14.58-6.53-14.58-14.58-14.58Z"/></g></svg></a>
                <a target='_blank' href="https://www.linkedin.com/in/maxowenchristensen/"><svg viewBox="0 0 420 420"><defs></defs><g id="c"><path className="d" d="m370,0H50C22.4,0,0,22.4,0,50v320c0,27.6,22.4,50,50,50h320c27.6,0,50-22.4,50-50V50c0-27.6-22.4-50-50-50Zm-240,160v190h-60v-190h60Zm-60-55.3c0-14,12-24.7,30-24.7s29.3,10.7,30,24.7c0,14-11.2,25.3-30,25.3s-30-11.3-30-25.3Zm280,245.3h-60v-100c0-20-10-40-35-40.4h-.8c-24.2,0-34.2,20.6-34.2,40.4v100h-60v-190h60v25.6s19.3-25.6,58.1-25.6,71.9,27.3,71.9,82.6v107.4Z"/></g></svg></a>
            </div>
        </div>
    </div>
  )
}

export default Footer