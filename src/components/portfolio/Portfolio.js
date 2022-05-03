import React from 'react'
import './portfolio.css'
import IMG_Z from '../../assets/z.png'
import IMG_ART from '../../assets/art.png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG_Z,
      title: 'Z-Services - Wigan',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel laborum natus officia. Quis assumenda non, minus alias veritatis laboriosam, corrupti doloremque, dicta qui suscipit reprehenderit dolor recusandae maiores? Corporis, quam, placeat adipisci asperiores atque sit qui earum optio quo commodi dolorem. Totam rerum quo quam sapiente laborum laudantium excepturi.',
      github: 'https://github.com/milka77/z-services',
      demo: 'https://milka77.github.io/z-services/',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'None' },
      ],
    },
    {
      id: 2,
      image:
        'https://github.com/milka77/ms2_memorygame/raw/master/assets/images/game.png',
      title: '"FIA WEC" JavaScript Memory Game',
      info: "It's an FIA WEC themed JavaScript memory game",
      github: 'https://github.com/milka77/ms2_memorygame',
      demo: 'https://milka77.github.io/ms2_memorygame/',
      frontend: [
        { id: 1, tech: 'HTML' },
        { id: 2, tech: 'CSS' },
        { id: 3, tech: 'Bootstrap' },
        { id: 4, tech: 'JavaScript' },
      ],
      backend: [
        { id: 1, btech: 'None' },
      ],
    },
    {
      id: 3,
      image:
        'https://raw.githubusercontent.com/milka77/ms3_cookbook/master/static/images/responsive.png',
      title: "Krisztian's Online CookBook",
      info: "This project it's for food enthusiast who is want to share thier favorite recipies with others. The website has full CRUD functionality.",
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
      info: "This Project is offering weekly setups and tutorials for Sim Racers. It's a subscription based service.",
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
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel laborum natus officia. Quis assumenda non, minus alias veritatis laboriosam, corrupti doloremque, dicta qui suscipit reprehenderit dolor recusandae maiores? Corporis, quam, placeat adipisci asperiores atque sit qui earum optio quo commodi dolorem. Totam rerum quo quam sapiente laborum laudantium excepturi.',
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
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel laborum natus officia. Quis assumenda non, minus alias veritatis laboriosam, corrupti doloremque, dicta qui suscipit reprehenderit dolor recusandae maiores? Corporis, quam, placeat adipisci asperiores atque sit qui earum optio quo commodi dolorem. Totam rerum quo quam sapiente laborum laudantium excepturi.',
      github: 'https://github.com/milka77/art_empire',
      demo: 'http://www.artempirepublishing.com',
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
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel laborum natus officia. Quis assumenda non, minus alias veritatis laboriosam, corrupti doloremque, dicta qui suscipit reprehenderit dolor recusandae maiores? Corporis, quam, placeat adipisci asperiores atque sit qui earum optio quo commodi dolorem. Totam rerum quo quam sapiente laborum laudantium excepturi.',
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
        {data.map(
          ({ id, image, title, github, demo, frontend, backend, info }) => {
            return (
              <div className='card' key={id}>
                <div className='card__image'>
                  <img src={image} alt={title} />
                </div>
                <div className='card__body'>
                  <h3>{title}</h3>
                  <span>{info}</span>
                  <h4>Used Technoligies</h4>

                  <div className='card__front-end'>
                    { frontend.map(({id, tech}) => {
                      return (
                        <span key={ id } className='label'>{ tech }</span>
                      )
                      })
                    }
                  </div>

                  <div className='card__back-end'>
                    { 
                      backend.map(({id, btech}) => {
                        // CHECKING IF THERE IS ANY BACKEND TECHNOLOGIES
                        if(btech === 'None') {
                          return (<span></span>)
                        } else {
                          return (
                            <span key={ id } className='label'>{ btech }</span>
                          )
                        }
                      })
                    }
                  </div>
                  <div className='card__button'>
                    <a className='btn btn-primary' href={ github } target="_blank" rel='noopener noreferrer'>GitHub</a>
                    <a className='btn btn-primary' href={ demo } target="_blank" rel='noopener noreferrer'>Live Demo</a>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Portfolio
