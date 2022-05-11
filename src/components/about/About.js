import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import CV from '../../assets/cv.pdf'

function About() {
  return (
    <section id='about'>
      <div className="container about__container">
        <h5>About Me</h5>
        <h2>About Me</h2>

        <div className="about__content">
          <div className="about__content-left">
            <p>Hello! My name is Krisztian.</p>
            <p>
              I'm a tech enthusiast who found his real passion in coding. My interest in web development started in the early 2000s when I
               met HTML and CSS. I was creating fun sites and the website for our computer shop. In 2020 I decided to take this hobby to the
               next level and signed up for a Full-Stack Development course with Code Institute accredited by the Edinborough University.
               After I receive my Level 5 Diploma in Software Development, I'm ready to face new challenges. I want to start my professional 
               Developer career, I'm open to freelancing, Junior Developer positions or Internships. Feel free to <a href='#contact'>contact</a> me.
            </p>
            <div className='cv-button'>
              <a href={ CV } className='btn btn-primary' target='_blank'  rel='noreferrer'>Download My CV</a>
            </div>
          </div>
          <div className="about__content-right">
            <img src={ Me } alt="Me" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About