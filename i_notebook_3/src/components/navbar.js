'use client';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import About from './about';
import { useEffect } from 'react';


const Navbar = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  const logout=()=>{
    localStorage.removeItem('token');
    props.ShowAlt("Logged Out Successfully","success")
    navigate("/login")
  }
  return (
    <>
    {/**/}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode ==='light'?'light':'dark'}  bg-${props.mode === 'light'?'dark-subtle':'black'}  `} style={{opacity:'99%'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{fontFamily:"ui-rounded",fontSize:"2pc"}}><strong>FonixNotes</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Link</Link>
              </li> */}
            </ul>
            {!localStorage.getItem('token')?
            <form className="d-flex" role="button">
             <Link className="btn btn-primary btn-md mx-2 rounded-pill " to="/login" role="button">Login </Link>
             <Link className="btn btn-primary btn-md mx-2 rounded-pill" to="/signup" role="button">SignUp</Link>
            </form> :
             
              <button className="btn btn-danger btn-md mx-2 rounded-pill" onClick={logout}> LogOut
               <svg className='mx-1' style={{right:"0"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
               </button>
              }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
