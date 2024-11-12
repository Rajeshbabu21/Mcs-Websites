import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../css/ContactForm.css'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <div className='form-container'>
      <form>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Subject' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Message'></textarea>
        <button type='submit' className='send-message'>
          Send Message
        </button>
      </form>
    </div>
  )
}
export default ContactForm