import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'


function Contact() {
  return (
    <section id='contact'>
      <div className="container contact__container">
        <h5>Let's Talk</h5>
        <h2>Contact Me</h2>

        <div className="contact__content">
          <div className="contact__form">
            <form action="">
              <div className='form-control'>
                {/* <label className='form-label' htmlFor="name">Name:</label> */}
                <input className='form-item' type="text" name="name" placeholder='Enter Your Name'/>
              </div>
              <div className='form-control'>
                {/* <label className='form-label' htmlFor="name">Email:</label> */}
                <input className='form-item' type="email" name="name" placeholder='Enter Your Email'/>
              </div>
              <div className='form-control'>
                {/* <label className='form-label' htmlFor="message">Message:</label> */}
                <textarea className='form-item' name="message" placeholder='Enter Your Message' rows={5}></textarea>
              </div>
              <div className='submit'>
                <button type="submit" className='btn btn-primary'>Submit <AiOutlineMail className='contact__icon'/></button>
              </div>
            </form>
          </div>

          <div className="contact__info">
            <ul>
              <li>Have an project idea?</li>
              <li>Need a new website?</li>
              <li>Or just want to chat?</li>
            </ul>
            <p>Use the form on the site or write an <a href='mailto:krisztian.keseru@gmail.com'>email <AiOutlineMail className='contact__icon'/></a> and I'll be in a touch with you.</p>
            <h3>Thank You!</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact