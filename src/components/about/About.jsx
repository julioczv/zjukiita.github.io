import React from 'react'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { HiOfficeBuilding } from 'react-icons/hi'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Venha Me Conhecer</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Imagem Sobre Mim" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Á procura de estágio</h5>
              <small>2 Anos no ramo da programação</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>5+ Completos</small>
            </article>
            <article className='about__card'>
              <HiOfficeBuilding className='about__icon' />
              <h5>Cargo</h5>
              <small>Representate de curso</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem, 
              id libero omnis minus sapiente excepturi. Libero voluptatem ea, 
              eligendi aliquam eaque amet ipsa odit consequuntur nulla deleniti nemo itaque.
          </p>
          <a href="#contact" className='btn btn-primary'>Contate-me</a>
        </div>
      </div>
    </section>
  )
}

export default About