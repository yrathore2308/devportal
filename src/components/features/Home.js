import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import AllFeatures from './AllFeatures';

const Home = () => {
    const history=useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')){
            console.log("Hello");
          }
          else{
            history.push("/login");
          }
    }, [])
    return (
        <div className="container my-5">
            <h2 style={{textAlign:'center'}} >Welcome to JCAL Dev Portal</h2>
            <p style={{textAlign:'center'}}>Fully Customizable website with documentation of Apis. Discover them, Learn to use them and try them out.</p>
            <AllFeatures/>
        </div>
    )
}

export default Home
