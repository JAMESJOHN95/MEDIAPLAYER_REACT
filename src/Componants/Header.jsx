import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar style={{backgroundColor:'#acd4f2'}} className="">
    <Container>
     <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand  style={{color:"white",fontSize:'35px',fontWeight:'700'}}>
          <i className="fa-solid fa-photo-film me-3 fa-list-check"></i>
          {''}
            Media Player
          </Navbar.Brand>
     </Link>
    </Container>
  </Navbar>
  )
}

export default Header