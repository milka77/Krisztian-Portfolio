import React from 'react'
import './portfolio.css'
import IMG_Z from '../../assets/z.png'
import IMG_ART from '../../assets/art.png'
import {BiCheck} from 'react-icons/bi'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG_Z,
      title: 'Z-Services - Wigan',
      github: 'https://github.com/milka77/z-services',
      demo: 'https://milka77.github.io/z-services/',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'JavaScript' },
      ],
      backend: [{ id: 1, btech: 'None' }],
    },
    {
      id: 2,
      image:
        'https://github.com/milka77/ms2_memorygame/raw/master/assets/images/game.png',
      title: '"FIA WEC" JavaScript Memory Game',
      github: 'hhttps://github.com/milka77/ms2_memorygame',
      demo: 'https://milka77.github.io/ms2_memorygame/',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [{ id: 1, btech: 'None' }],
    },
    {
      id: 3,
      image:
        'https://raw.githubusercontent.com/milka77/ms3_cookbook/master/static/images/responsive.png',
      title: "Krisztian's Online CookBook",
      github: 'https://github.com/milka77/ms3_cookbook',
      demo: 'https://ci-ms3-krisztians-cook-book.herokuapp.com/',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'Python' },
        { id: 2, btech: 'Flask - Framework' },
        { id: 3, btech: 'MongoDB' },
      ],
    },
    {
      id: 4,
      image:
        'https://github.com/milka77/ci-ms4-simdriver-school/raw/master/media/simracing_school.png',
      title: 'SimDriver School - /Django webshop/',
      github: 'https://github.com/milka77/ci-ms4-simdriver-school',
      demo: 'https://ci-ms4-simracing-school.herokuapp.com/',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'Python' },
        { id: 2, btech: 'Django - Framework' },
        { id: 3, btech: 'Postgres DB' },
        { id: 4, btech: 'Stripe Payment' },
      ],
    },
    {
      id: 5,
      image:
        'https://i.picsum.photos/id/1/1920/1080.jpg?hmac=F3y4Fj0qI8heo51givSFTbNc8P5g1eR8ztnE7zDiVDg',
      title: 'Online CookBook - PHP-Laravel version',
      github: 'https://github.com/milka77/CookBook-Laravel',
      demo: '#',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'PHP' },
        { id: 2, btech: 'Laravel - Framework' },
        { id: 3, btech: 'MySQL' },
      ],
    },
    {
      id: 6,
      image: IMG_ART,
      title: 'Art Empire Publishing',
      github: 'https://github.com/milka77/art_empire',
      demo: 'https://www.artempirepublishing.com',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'PHP' },
        { id: 2, btech: 'PHPMail' },
      ],
    },
    {
      id: 7,
      image:
        'https://i.picsum.photos/id/1/1920/1080.jpg?hmac=F3y4Fj0qI8heo51givSFTbNc8P5g1eR8ztnE7zDiVDg',
      title: 'Home Application - PHP-MVC',
      github: 'https://github.com/milka77/php-homeapp',
      demo: '#',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'PHP' },
        { id: 2, btech: 'PHP MVC - Framework' },
        { id: 3, btech: 'MySQL' },
      ],
    },
  ]

  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo, frontend, backend }) => {
          return (
            <div className='flips' key={id}>
              <div className='flips-inner'>
                <article className='card flips-front' id={id}>
                  <div className='card-header'>
                    <img src={image} alt={title} />
                  </div>
                  <div className='card-body'>
                    <h3>{title}</h3>
                  </div>

                  <div className='card-footer'>
                    {/* <a href='#' className='btn' target='_blank'>GitHub</a>
                      <a href='#' className='btn' target='_blank'>Live Demo</a> */}
                    <button className='btn btn-primary' >More Info</button>
                  </div>
                </article>

                <article className='card flips-back' id={id}>
                  <h3>Technologies Used</h3>
                  <div className='technology-list'>
                    <div className='flips-back__left'>
                      <h4>Front-End</h4>
                      <ul>
                        {
                          frontend.map(({id, tech}) => {
                            return (
                              <li key={id}><BiCheck /> {tech}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    <div className='flips-back__right'>
                      <h4>Back-End</h4>
                      <ul>
                        {
                          backend.map(({id, btech}) => {
                            return (
                              <li key={id}><BiCheck className='service__list-icon' /> {btech}</li>
                            )
                          })
                          
                        }
                      </ul>
                    </div>
                  </div>

                  <div className="card-footer">
                    <a href={github} className='btn' target='noreferrer noopener'>GitHub</a> 
                    <a href={demo} className='btn btn-primary' target='noreferrer noopener'>Live Demo</a> 
                  </div>
                </article>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
