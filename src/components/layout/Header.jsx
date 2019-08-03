import React from 'react'
import logo from './../../assets/logo-marvel.png'

export default function Header() {
  return (
    <div className="container-fluid py-4 bg-marvel">
      <div className="mx-auto w-25">
        <figure className="figure w-100">
          <img className="figure-img img-fluid" src={ logo } alt="Marvel Comics logo" />
        </figure>
        <div className="h6 text-white px-1 d-flex justify-content-between" aria-hidden="true" style={{ zIndex: 1, marginTop: '-24px' }}>
          <div>C</div>
          <div>H</div>
          <div>A</div>
          <div>R</div>
          <div>A</div>
          <div>C</div>
          <div>T</div>
          <div>E</div>
          <div>R</div>
          <div>S</div>
        </div>
        <h1 className="sr-only">
          Chracters of the Marvel Comics Universe
        </h1>
      </div>
    </div>
  )
}
