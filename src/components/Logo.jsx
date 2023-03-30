import React from 'react'
import logo from '../images/logo-tabela.png'
import '../css/header.css'

function Header() {
  return (
    <div>
      <img className="logo-fipe" src={ logo } alt="logo tipo da tabela fipe" />
    </div>
  )
}

export default Header;
