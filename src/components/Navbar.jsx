// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">Inicio</Link>
      <Link to="/quienes">Quiénes Somos</Link>
      <Link to="/buscohogar">Busco un Hogar</Link>
      <Link to="/adoptar">Adóptanos</Link>
      <Link to="/donaciones">Donaciones</Link>
    </nav>
  )
}

export default Navbar
