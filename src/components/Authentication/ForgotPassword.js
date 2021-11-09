import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email, setemail] = useState("");
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("submmitted email",email);
        alert("Password Reset Link has been sent to your email");
        
    }
    const handleChange = (e) => {
        setemail(e.target.value);
      };
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className="container my-5">
            <h2>Reset Your Password</h2>
            <form style={{width:'60%'}} onSubmit={handleSubmit}>
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
            value={email}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll sent you a password reset Link.
          </div>
        </div>
        <button
          disabled={
            
            email.length === 0
          }
          type="submit"
          className="btn btn-primary my-2"
        >
          Get Link
        </button>
      </form>
        </div>
    )
}

export default ForgotPassword
