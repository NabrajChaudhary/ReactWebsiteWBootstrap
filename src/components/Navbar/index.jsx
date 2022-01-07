import React from 'react'
import Logo from '../../Image/Logo.png';
import { AiOutlineUser} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container">
    <a className="navbar-brand" href="/">
        <img src={Logo} alt="Hello" className='img-fluid h-25 w-75' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <a className="nav-link" href="/">Watches</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/">Eyewear</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/">Accesories</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/">News</a>
        </li>
       
        
      </ul>
      <div className="d-flex left-nav-custom">
         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
         
        <li className="nav-item">
      <div className="form-inline d-flex justify-content-center">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn coloredButton my-2 mx-1 my-sm-0" type="submit"><BsSearch/></button>
  </div>
        </li>
        <li className="nav-item mx-2 navLogin">
          <a className="nav-link d-flex flex-row " href="/">
           <AiOutlineUser />
              &nbsp;<span>Login</span>
          </a>
        </li>
        
        <li className="nav-item mx-2 d-flex justify-content-center shoppingCart">
          <a className="nav-link d-flex justify-content-center" href="/"><BiShoppingBag/></a>
        </li>
       
        
      </ul>
      </div>
    </div>
  </div>
  
</nav>
        </>
    )
}

export default Navbar
