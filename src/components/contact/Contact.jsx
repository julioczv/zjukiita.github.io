import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_spuuxac', 'template_xlnplug', form.current, 'vXg4qJIQoRpCf7gDX')
      
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>juliodevazevedo@gmail.com</h5>
            <a href="mailto:juliodevazevedo@gmail.com" target='_blank'>Mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+5516997306249</h5>
            <a href="https://wa.me/5516997306249" target='_blank'>Mande uma mensagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Mandar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact