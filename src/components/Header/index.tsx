import logo from '../../assets/images/logo-marvel.png'
import './styles.scss'

function Header() {
  return (
    <div className="container-fluid py-4 bg-marvel">
      <div className="mx-auto w-25">
        <figure className="figure w-100">
          <img className="figure-img img-fluid" src={logo} alt="Marvel Comics logo" />
        </figure>

        <div
          className="h6 text-white px-1 d-flex justify-content-between"
          aria-hidden="true"
          style={{ zIndex: 1, marginTop: '-24px' }}
        >
          {'CHARACTERS'.split('').map((letter, index) => (
            <div key={index}>{letter}</div>
          ))}
        </div>

        <h1 className="sr-only">Characters of the Marvel Comics Universe</h1>
      </div>
    </div>
  )
}

export default Header
