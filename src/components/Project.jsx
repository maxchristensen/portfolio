import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Project = () => {
    const [project, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        const index = (id - 1);
        axios.get('/projects.json')
            .then(response => {
                setProjects(response.data.projects[index])
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    console.log(project);

    if (loading) {
        return <>Loading...</>
      }

      return (
        <div className='single-project-container' key={project.id}>
                <div className="single-project-tab">
                    <div className="single-project-image">
                        <img src={project.image[0].image_link}/>
                    </div>
                    <div className="single-project-image">
                        <img src={project.image[1].image_link}/>
                    </div>
                </div>
                <div className="single-project-tab">
                    <div className="single-project-image">
                        <img src={project.image[2].image_link}/>
                    </div>
                    <div className="single-project-image">
                        <img src={project.image[3].image_link}/>
                    </div>
                </div>
                <div className="single-project-2-tabs">
                <h2>{project.name}</h2>
                <h6>{project.year}</h6>
                <p>{project.blurb}</p>
                </div>
        </div>
     );
}

export default Project