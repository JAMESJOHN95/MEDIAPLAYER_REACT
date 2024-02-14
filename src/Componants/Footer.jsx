import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:"300px"}} className='mt-3 p-4 w-100'>
        <div className="row">
            <div className="col-lg-4 p-3">
                <h5 ><i class="fa-solid fa-photo-film"></i> Media Player</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor sed magnam est deleniti fugiat sint tempore ab harum eos esse possimus, dicta doloribus autem asperiores dignissimos nobis praesentium ex.</p>
            </div>
            <div className="col-lg-2 p-3 links d-flex flex-column">
                <h5>Links</h5>
                <Link to={'/'} style={{textDecoration:'none', color:'black'}}> Landing Page</Link>
                <Link to={'/Home'}style={{textDecoration:'none', color:'black'}}>Home Page</Link>
                <Link to={'/Watch'}style={{textDecoration:'none', color:'black'}}>Watch History</Link>

            </div>
            <div className="col-lg-2 p-3 guides d-flex flex-column">
                <h5>Guides</h5>
                <a  style={{textDecoration:'none', color:'black'}} href="https://react.dev/">React JS</a>
                <a  style={{textDecoration:'none', color:'black'}} href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
                <a  style={{textDecoration:'none', color:'black'}} href="https://reactrouter.com/en/main">React Routing</a>
                </div>
            <div className="col-lg-3 p-3">
                <h5>Contact</h5>
                <div className='d-flex'>
                    <input style={{borderRadius:'10px',marginRight:'5px'}}  type="text"placeholder='Email id ' />
                    <button style={{borderRadius:'10px',padding3:'3px'}} >Submit</button>
                </div>
                <div className='d-flex mt-3'>
                <i class="fa-brands fa-square-facebook"></i>
                </div>

                </div>
        </div>
        Footer
    </div>
  )
}

export default Footer