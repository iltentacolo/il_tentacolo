import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          IL TENTACOLO
        </Link>
      </div>
    </header>
  )
}

export default Header
