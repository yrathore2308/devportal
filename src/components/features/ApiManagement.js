import React, { useState } from 'react'
import Sbar from '../sidebar/Sbar';
import Sidebar from '../sidebar/Sidebar';
import './ApiManagement.css';
const ApiManagement = () => {
    const [data, setdata] = useState('Data from API will come here...')
    const handlClick=async()=>{
        await fetch("http://localhost:8080/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json',
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
      
    }).then(async(response)=>{
        let dt=await response.json();
        setdata(dt.token);
        console.log("only data",dt.token);
    })
    .catch((e)=>{
        console.log("inside error block",e);
    })
    
    
    
    }
    return (
        <div className="container">
            {/* <Sidebar/> */}
            {/* <Sbar/> */}
            <h2>API Management Dashboard</h2>
            <input style={{width:'50%'}} readOnly type="text"  value={data} placeholder='Data from API will come here...' /><br/>
            <button className="btn btn-primary my-2" onClick={handlClick}>Click to make API call</button>
        </div>
    )
}

export default ApiManagement
