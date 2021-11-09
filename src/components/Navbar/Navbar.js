import React, { useEffect } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import { FaUser} from 'react-icons/fa'
const Navbar = () => {
    let location=useLocation();
    const history=useHistory();
    useEffect(() => {
      console.log("current location",location.pathname);
    }, [location]);
    const handleLogout=()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('currentLoggedInUser');
      history.push("/login")

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img style={{width:'60px'}} src="logo path goes here" alt="logo" /> Dev Portal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              {location.pathname!="/login" && location.pathname!="/signup"  && <Link className={`nav-link ${location.pathname==="/"?'active':""}`} aria-current="page" to="/">Home</Link>}
              </li>
              {/* <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?'active':""}`} to="/about">About</Link>
              </li> */}
              
            </ul>
            {!localStorage.getItem('token')?
            <form className="d-flex">
            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign-Up</Link>
            </form>:
            <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <FaUser/>{` Welcome ${localStorage.getItem('currentLoggedInUser')}`}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Profile</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a style={{cursor:'pointer'}} className="dropdown-item" onClick={handleLogout}>LogOut</a></li>
            </ul>
          </div>
          }
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
