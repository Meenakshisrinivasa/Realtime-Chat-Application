// import React from "react";
import React ,{useState}from "react";
import axios from"axios";
import { useNavigate } from "react-router-dom";

export function Signup(){
        const [signup, setSignup] = useState("");
    const navigate = useNavigate();
    function dashclick() {
        axios.post('http://localhost:3000/signup',signup)
        .then(function (response) {
          console.log(response);
          navigate('/Dashboard')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return(
        <div className="logincontainer">
        <div className="box">
            <h1>SIGN-UP</h1>
            <div className="inputfields">
                <label>USERNAME</label>
                <input type="text" onChange={(d)=>{setSignup({...signup,name:d.target.value})}} className="input" placeholder="username"/>
            </div>
            <div className="inputfields">
                <label htmlFor="password">PASSWORD</label>
                <input type="password" onChange={(d)=>{setSignup({...signup,password:d.target.value})}} className="input" placeholder="password"/>
            </div>
            <div className="inputfields">
                <label htmlFor="password">CONFIRM PASSWORD</label>
                <input type="password" className="input" placeholder="confirm password"/>
            </div>
            <div className="signupbtncontainer">
             <button className="button" onClick={dashclick}>SUBMIT!</button>
             {/* <button className="button" onClick={handleclick}>SIGNUP!</button> */}
            </div>
        </div>
    </div>

)
}
    
