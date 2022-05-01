import React from 'react'
import './services.css'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaLaravel } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { SiFlask } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <h5>My Skills, Technologies, Frameworks</h5>
        <h2 className='font-poppins'>Skills</h2>

        <div className='skills__content'>

          {/* FRONT-END SKILLS  */}
          <div className='skills__font-end'>
            
            <h4 className='skills__title'>Front-End Development</h4>
            <div className='skill-card__content'>
              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaHtml5 />
                </div>
                <div className='skill-card__detail'>
                  <h4>HTML5</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaCss3Alt />
                </div>
                <div className='skill-card__detail'>
                  <h4>CSS3</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaSass />
                </div>
                <div className='skill-card__detail'>
                  <h4>SASS</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaBootstrap />
                </div>
                <div className='skill-card__detail'>
                  <h4>Bootstrap</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <SiTailwindcss />
                </div>
                <div className='skill-card__detail'>
                  <h4>Tailwind CSS</h4>
                  <small>Basic</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <IoLogoJavascript />
                </div>
                <div className='skill-card__detail'>
                  <h4>JavaScript</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <SiJquery />
                </div>
                <div className='skill-card__detail'>
                  <h4>JQuery</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaReact />
                </div>
                <div className='skill-card__detail'>
                  <h4>ReactJS</h4>
                  <small>Basic</small>
                </div>
              </article>

            </div>
          </div>
          {/* FRONT-END SKILLS  */}

          {/* BACK END SKILLS  */}
          <div className='skills__back-end'>
            <h4 className='skills__title'>Back-End Development</h4>

            <div className="skill-card__content">

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <SiPhp />
                </div>
                <div className='skill-card__detail'>
                  <h4>PHP</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaLaravel />
                </div>
                <div className='skill-card__detail'>
                  <h4>Laravel</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <FaPython />
                </div>
                <div className='skill-card__detail'>
                  <h4>Python</h4>
                  <small>Basic</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <SiFlask />
                </div>
                <div className='skill-card__detail'>
                  <h4>Flask</h4>
                  <small>Basic</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <DiDjango />
                </div>
                <div className='skill-card__detail'>
                  <h4>DJango</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <SiMysql />
                </div>
                <div className='skill-card__detail'>
                  <h4>MySQL</h4>
                  <small>Advanced</small>
                </div>
              </article>

              <article className='skill-card'>
                <div className='skill-card__icon'>
                  <SiMongodb />
                </div>
                <div className='skill-card__detail'>
                  <h4>MongoDB</h4>
                  <small>Basic</small>
                </div>
              </article>

            </div>
            {/* <ul className='skills__list'>
              <li>PHP</li>
              <li className='skills__secondary'>Laravel</li>
              <li>Python</li>
              <li className='skills__secondary'>Flask</li>
              <li className='skills__secondary'>DJango</li>
              <li>Stripe</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul> */}
          </div>
          {/* BACK END SKILLS  */}
        </div>
      </div>
    </section>
  )
}

export default Services
