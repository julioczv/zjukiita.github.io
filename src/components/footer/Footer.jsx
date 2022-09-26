import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JULIO</a>

      <ul className='permalinks'>
        <li><a href="">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Competências</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/julio.azevedo.35/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/juliocazvdo/"><FiInstagram /></a>
        <a href="https://github.com/zjukiita"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <a href='https://www.youtube.com/c/EGATORTUTORIALS'>EGATOR Tutorials. Todos os direitos reservados</a></small>
      </div>
    </footer>
  )
}

export default Footer