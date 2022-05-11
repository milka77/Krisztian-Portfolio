import React, { useRef } from 'react'
import { useState } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formMessageClass, setFormMessageClass] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'rosie', form.current, 'user_v1yovIkE2muZxlMxPMJpU')
      .then(
        (result) => {
          console.log(result.text)

          setName('')
          setEmail('')
          setMessage('')
          setFormMessage('Your Message Sent Succesfully')
          setFormMessageClass('form-message-success')
        },
        (error) => {
          console.log(error.text)
          setFormMessage('Message not sent, please try again later')
          setFormMessageClass('form-message-error')
        }
      )
  }

  return (
    <section id='contact'>
      <div className='container contact__container'>
        <h5>Let's Talk</h5>
        <h2>Contact Me</h2>

        <div id='form-message' className={ formMessageClass }>{ formMessage }</div>

        <div className='contact__content'>
          <div className='contact__form'>
            <form ref={ form } onSubmit={ sendEmail }>
              <div className='form-control'>
                <input
                  className='form-item'
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                  value={ name }
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-control'>
                <input
                  className='form-item'
                  type='email'
                  name='email'
                  placeholder='Enter Your Email'
                  value={ email }
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-control'>
                <textarea
                  className='form-item'
                  name='message'
                  placeholder='Enter Your Message'
                  rows={5}
                  value={ message }
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className='submit'>
                <button type='submit' className='btn btn-primary'>
                  Send Message <AiOutlineMail className='icon' />
                </button>
              </div>
            </form>
          </div>

          <div className='contact__info'>
            <ul>
              <li>Have a project idea?</li>
              <li>Need a new website?</li>
              <li>Or just want to chat?</li>
            </ul>
            <p>
              Use the form on the site or write an{' '}
              <a href='mailto:krisztian.keseru@gmail.com'>
                email <AiOutlineMail className='icon' />
              </a>{' '}
              and I'll be in touch with you.
            </p>
            <h3>Thank You!</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
