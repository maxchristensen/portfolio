import React from 'react'
import { Routes, Route} from 'react-router-dom'

// Import Pages
import Projects from '../pages/Projects'
import About from '../pages/About'

// Import Components
import Project from './Project'

const Links = () => {
    return (
      <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route exact path="/about" element={<About />} />

      </Routes>
    )
  }

export default Links