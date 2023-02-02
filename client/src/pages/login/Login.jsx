import React, { useContext, useState } from 'react'
import "./login.scss"
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Login = () => {
   const [error, setError] = useState(null);
   const [inputs, setInputs] = useState({
      username:"",
      password:"",
   });

   const handleChange = (e) =>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
   // console.log(inputs);
   const { login } = useContext(AuthContext);
   const navigate = useNavigate();
   
   const handleLogin = async (e) =>{
      e.preventDefault();
      try{
          await login(inputs);
          console.log("logged");
          navigate("/");
      }
      catch(err){
            setError(err.response.data);
      }
   }
  return (
    <div className='login'>
       <div className="card">
          <div className="left">
               <h1>Hello World</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste mollitia dolor accusantium veritati
                  s ullam blanditiis at quis nisi quasi?
               </p>
               <span>Don't you have an account</span>
               <Link to="/register">
                  <button>Register</button>
               </Link>
          </div>
          <div className="right">
               <h1>Login</h1>
               <form >
                  <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                  <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                  {error && error}
                  <button onClick={handleLogin}>Login</button>
               </form>
          </div>
       </div>
    
    </div>
  )
}

export default Login