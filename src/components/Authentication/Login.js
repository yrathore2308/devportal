import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaEye,FaEyeSlash}  from 'react-icons/fa'
import logo from '../../images/loginPageImg.svg'; 

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    showPassword:false,
    showErrorMeesage:false
  });
  const [rememberTag, setrememberTag] = useState(false);
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      email: credentials.email,
      password: credentials.password,
    };
    console.log("submitted cred", payload);
    const response = await fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseJson = await response.json();
    console.log("responsejson", responseJson);
    if (responseJson.token) {
      localStorage.setItem("token", responseJson.token);
      localStorage.setItem("currentLoggedInUser", credentials.email.substring(0,credentials.email.lastIndexOf("@")));
      console.log("saved token", localStorage.getItem("token"));
      history.push("/");
      props.showAlert("Logged In Successfully","success");
    } else {
      props.showAlert("Invalid credentials","danger");
      setCredentials({
        ...credentials,
        showErrorMeesage:!credentials.showErrorMeesage
      })
      
    }
  };
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleRememberMe=(e)=>{
    

    if(e.target.checked){
      console.log("check marked",e.target.checked);
      setrememberTag(e.target.checked)
      console.log("after setting remember tag",rememberTag);
    }
    
  }
  const handlePassShowHide=()=>{
    setCredentials({
      ...credentials,
      showPassword:!credentials.showPassword
    })
  }
  return (
    
      <div  className="my-5">
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <form className="was-validated"  onSubmit={handleSubmit}>
      <h2>Welcome To JCAL Dev Portal</h2>
        <div className="my-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control form-check"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={credentials.email}
            style={{border:'none',borderBottom:'1px solid black'}}
            placeholder="Enter your email here"
             required
             
            
          />
          
          {/* <div className="invalid-feedback">
          Please enter a valid username.
          </div> */}
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div style={{display:'flex'}} >
          <input
            type={credentials.showPassword?'text':'password'}
            name="password"
            className="form-control form-check"
            id="password"
            onChange={handleChange}
            placeholder="Enter password here"
            value={credentials.password}
            required
            style={{border:'none',borderBottom:'1px solid black'}}
          />
          <i style={{marginLeft:'2px',cursor:'pointer'}}>{credentials.showPassword?<FaEye onClick={handlePassShowHide}/>:<FaEyeSlash onClick={handlePassShowHide}/>}</i>
          </div>
          {credentials.showErrorMeesage && <p className="my-2" style={{color:'red'}}>Username or Password is incorrect </p>  }
          {/* <div className="invalid-feedback">
          Please provide your password.
          </div> */}
        </div>
          
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberme"
            name="rememberme"
            
            onChange={handleRememberMe}
            
          />
          <label className="form-check-label" htmlFor="rememberme">
            Remember Me
          </label>
        </div>
        <div>
          <Link to="/login/reset">Forgot password?</Link>
        </div>

        <button
          disabled={
            credentials.email.length === 0 ||
            credentials.password.length === 0
          }
          type="submit"
          className="btn btn-primary my-2"
        >
          Submit
        </button>
        <hr />
      <p>
        New To Dev Portal..? <Link to="/signup">Click here to Register</Link>
      </p>
      </form>
      </div>
      
    </div>
     
  );
};

export default Login;
