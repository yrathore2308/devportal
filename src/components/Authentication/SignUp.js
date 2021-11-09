import React, { useState } from "react";
import { useHistory } from "react-router";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    role:"",
    org:"",
    password: "",
    cpassword: "",
  });
  let history = useHistory();

  const handleChange = (e) => {
    console.log("adadada",e.target.name,e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // change format for role as "ROLE_ADMIN"
    let payload = {
      accountNonExpired: true,
      accountNonLocked: true,
      credentialsNonExpired: true,
      email: credentials.email,
      enabled: true,
      password: credentials.password,
      name: credentials.name,
      role: [credentials.role],
      org: credentials.org,
      
    };
    console.log("submitted payload",payload);
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseJson = await response.json();
    console.log("responsejson", responseJson);
    if (responseJson) {
      console.log("inside if");
      alert("Account created Successfully");
      history.push("/login");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className="container my-4">
      <form  onSubmit={handleSubmit}>
      <h2>Register here to get started</h2>
        <div className="my-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={credentials.email}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            onChange={handleChange}
            value={credentials.name}
            required
          />
        </div>
        <div className="mb-3">
        <label htmlFor="role" className="form-label">
            Role
          </label>
          <select defaultValue={'DEFAULT'} name="role" onChange={handleChange} id="role"  className="form-select" aria-label="Default select example">
            <option value="DEFAULT" disabled>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Developer">Developer</option>
            <option value="Internal">Internal</option>
          </select>
        </div>
        <div className="mb-3">
        <label htmlFor="org" className="form-label">
            Organization Name
          </label>
          <input
            type="text"
            className="form-control"
            id="org"
            name="org"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={credentials.org}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            onChange={handleChange}
            value={credentials.password}
            required
            minLength={5}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            className="form-control"
            id="cpassword"
            onChange={handleChange}
            value={credentials.cpassword}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
