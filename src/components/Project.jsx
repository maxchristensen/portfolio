import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Project = () => {
    const [project, setProjects] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const index = (id - 1);
        axios.get('/projects.json')
            .then(response => {
                setStudent(response.data.projects[index])
                setProjects(response.data.projects[index].project)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])
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

                </div>
        </div>
     );
}

export default Project