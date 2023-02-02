import React, { useState } from 'react'
import "./register.scss"
import {Link} from 'react-router-dom';
import axios from 'axios';


const Register = () => {
   const [error, setError] = useState(null);
   const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:"",
      name: "",
   });
   
   const handleChange = (e) =>{
       setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
   }
   // console.log(inputs);

   const handleClick = async(e) =>{
        e.preventDefault();
        try{
             await axios.post("http://localhost:8000/api/auth/register",inputs);
             console.log("user registered");
        }
        catch(err){
            setError(err.respone.data);
        }
   }
  
   console.log(error);
  return (
    <div className='register'>
       <div className="card">
          <div className="left">
               <h1>Vishal Social.</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste mollitia dolor accusantium veritati
                  s ullam blanditiis at quis nisi quasi?
               </p>
               <span>Do you have an account</span>
               <Link to="/login">
                   <button>Login</button>
               </Link>
          </div>
          <div className="right">
               <h1>Register</h1>
               <form >
                  <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                  <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                  <input type="password" placeholder='Password' name='username' onChange={handleChange} />
                  <input type="text" placeholder='Name' name='username' onChange={handleChange}/>
                 {error && error}
                  <button onClick={handleClick}>Register</button>
               </form>
          </div>
       </div>
    
    </div>
  )
}

export default Register