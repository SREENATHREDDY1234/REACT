import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"

const Login = () => {
    const [loginType,setLoginType]=useState("Sign In")
  return (
    <div className='login'>
        <div className="logo_img">
            <img src={logo} alt="" />
        </div>
        <div className="login-container">
            <h1>{loginType}</h1>
            <form>
                {(loginType == "Sign In")?<></>:<input type='text' placeholder='Your name'/>}
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='password'/>
                <button>{loginType}</button>
            </form>
            <div className="help">
                <div>
                    <input type="checkbox" name="RememberMe" id="RememberMe" />
                    <label htmlFor="RememberMe">Remember Me</label>
                </div>
                <p>Need Help?</p>
            </div>
            {
                (loginType == "Sign In")?
                <p className='question'>New to Netflix?  <span onClick={()=>{setLoginType("Sign Up")}}> Sign Up Now</span></p>:
                <p className='question'>Already have account?  <span onClick={()=>{setLoginType("Sign In")}}> Sign In Now</span></p>
            }
            
        </div>
    </div>
  )
}

export default Login