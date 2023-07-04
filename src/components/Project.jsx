import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Project = () => {
    const [project, setProjects] = useState([])

    const {id} = useParams()

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
          console.log(res)
          setPost(res.data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
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


  return (
    <div className='single-project-container'>
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
  )
}

export default Project