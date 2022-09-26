import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço </h5>
      <h2>Competências</h2>

      <div className="container services__container">

        {/* UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design centrado no usuário</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Termos de usabilidade</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Protótipos de Baixa/Média e Alta fidelidade</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testes</p>
            </li>
          </ul>
        </article>

        {/* Desenvolvimento Web */}

        <article className='service'>
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Códigos organizados</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flexibilidade com frameworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Códigos atualizados</p>
            </li>
          </ul>
        </article>

        {/* Criando Códigos */}

        <article className='service'>
          <div className="service__head">
            <h3>Criação de Código</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criando apps para android ou desktop microsoft</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Banco de dados em MySQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API em node JS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Codificando o mais rápido possível</p>
            </li>
          </ul>
        </article>

      </div>
    </section>

  )
}

export default Services