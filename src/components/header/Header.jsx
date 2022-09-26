import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá Eu sou</h5>
        <h1>Júlio César</h1>
        <h5 className="textlight">Desenvolvedor Fullstack</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Page Down</a>
      </div>
    </header>
  )
}

export default Header