import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('./projects.json')
    .then(res => {
      setProjects(res.data.projects)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
     }) 
}, [])


  const Project = ({projects}) => {
    const mappedProjects = projects.map((project, index) => {
      return (
        <>
        <Link to={`projects/${project.id}`}>
          <div className="project-tab" key={project.name + index}>
            <div className="project-image">
              <img src={project.image[0].image_link}/>
            </div>
            <div className="project-info">
              <h5>{project.name}</h5>
              <h5 className='project-year'>{project.year}</h5>
            </div>
          </div>
        </Link>
        </>
      )
    })

    return(
      <>
      {mappedProjects}
      </>
    )


  }

  return (
    <>
    <div className="projects-container">
      <Project projects={projects} />
    </div>
    </>
  )
} 

export default Projects