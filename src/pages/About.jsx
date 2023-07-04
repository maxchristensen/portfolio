import {useState, useEffect} from 'react'

const About = () => {



  return (
    <div>
      <div className="about-container">
        <div className="about-tab">
          <p>Interested in collaberating?<br />Got a cool idea that you need help bring to life?</p>
          <br />
          <h3>Get in Touch!</h3>
          <p>Email: maxowenchristensen@yahoo.com</p>
          <a target='_blank' href="/MaxChristensen_CV.pdf"><p>Read CV</p></a>
          <br /><br />
          <h4>This website was built using:</h4>
          <br />
          <ul>
            <li>React</li>
            <li>SCSS</li>
          </ul>
        </div>
        <div className="about-tab">
        </div>
        <div className="about-tab">
          <div className="about-portrait" />
        </div>
        <div className="about-tab">
          <h2>Hello!</h2>
          <br />
          <p>
            Hey! My name is Max, and I am a Graphic Designer and Web Developer based in the windy city of Te Whanganui-a-Tara. <br /> <br />
            I am always trying to push the limits of what websites and applications can look like, by bringing in hints of minimalist graphic design to enhance and evolve the digital space. <br /> <br />
            Whenever I’m not working on crazy, over-the-top projects. You can catch world-building, currently building a homebrew dungeons & dragons world called Drukhanis. <br /> <br />
            I am also a Formula One fanatic, currently cheering on Aston Martin and Ferrari!
          </p>
        </div>
      {/* End of container */}
      </div>
    </div>
  )
}

export default About