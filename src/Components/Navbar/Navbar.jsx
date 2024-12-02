import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from  '../../Assets/images/Logo/Restaurant-yummy-food.png'




export default function Navbar() {

    let navBar = useRef(null)
    let container = useRef(null)
    let Nav = useRef(null)

    /* Change Color Nav-Bar */
    function changeColor() {
        let scroll = window.scrollY;
        if (scroll < 150) {
            navBar.current.style.backgroundColor = "transparent";
            container.current.classList.replace("container-fluid", 'container');

        }else if (scroll < 0){
        } else {
            navBar.current.style.backgroundColor = "#0F172B";
        }
    }

    const hideNav = ()=> {
      Nav.current.classList.remove('show')
      
    }

    function change() {

      navBar.current.style.backgroundColor = "#0F172B";

  }
    useEffect(()=>{
      const handleScroll = () => {
        changeColor();
    };
    window.addEventListener('scroll', handleScroll);
    changeColor();
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };    },[])


  return  <>
  
  <nav ref={navBar} className="navbar gg navbar-expand-lg  mt-0 pt-0 position-fixed w-100">
  <div ref={container} className="container">
    <NavLink className="navbar-brand   " to={`/`}>
          <figure className='d-flex justify-content-center align-items-center'>
            <NavLink><img src={Logo} className='w-100 Logo' alt="Page Logo" /></NavLink>
            <figcaption><NavLink className={`text-decoration-none `}>Yummy</NavLink></figcaption>
          </figure>
    </NavLink>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i onClick={change} className="navbar-toggler fa-solid fa-bars-staggered" ></i>

    </button>

    <div ref={Nav} className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li onClick={hideNav} className="nav-item">
          <NavLink className="nav-link fs-5" to={`/Home`}>Home</NavLink>
        </li>
        <li onClick={hideNav} className="nav-item">
          <NavLink className="nav-link fs-5" to={`/About`}>About</NavLink>
        </li>
        <li onClick={hideNav} className="nav-item">
          <NavLink className="nav-link fs-5" to={`/Services`}>Services</NavLink>
        </li>
        <li onClick={hideNav} className="nav-item">
          <NavLink className="nav-link fs-5" to={`/Foodmenu`}>Foodmenu</NavLink>
        </li>
        <li onClick={hideNav} className="nav-item">
          <NavLink className="nav-link fs-5" to={`/Contact`}>Contact</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>
  
  
  </>
}
