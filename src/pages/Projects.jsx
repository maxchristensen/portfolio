import {useState, useEffect} from 'react'
import axios from 'axios'

const Projects = () => {

  const [projects, setProjects] = useState(null)
  const [loading, setLoading] = useState(true)

  return (
    <>
      <div className='projects-container'>
        <div className="project-tab">
          <div className="project-image" />
          <div className="project-info">
            <h5>Project Name</h5>
            <h5 className='project-year'>9999</h5>
          </div>
        </div>
        <div className="project-tab">
          <div className="project-image" />
          <div className="project-info">
            <h5>Project Name</h5>
            <h5 className='project-year'>9999</h5>
          </div>
        </div>
        <div className="project-tab">
          <div className="project-image" />
          <div className="project-info">
            <h5>Project Name</h5>
            <h5 className='project-year'>9999</h5>
          </div>
        </div>
        <div className="project-tab">
          <div className="project-image" />
          <div className="project-info">
            <h5>Project Name</h5>
            <h5 className='project-year'>9999</h5>
          </div>
        </div>


      </div>
    </>
  )
}

export default Projects