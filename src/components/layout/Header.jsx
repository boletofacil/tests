import React from 'react'
import logo from './../../assets/logo-marvel.png'

export default function Header() {
  return (
    <div className="container-fluid py-4 bg-marvel">
      <div className="mx-auto w-25">
        <figure className="figure w-100">
          <img className="figure-img img-fluid" src={ logo } alt="Marvel Comics logo" />
        </figure>
        <h1 className="h6 text-white px-1" aria-hidden="true" style={{ textAlignLast: 'justify', zIndex: 1, marginTop: '-24px' }}>
          C H A R A C T E R S
        </h1>
        <h1 className="sr-only">
          Chracters of the Marvel Comics Universe
        </h1>
      </div>
    </div>
  )
}
