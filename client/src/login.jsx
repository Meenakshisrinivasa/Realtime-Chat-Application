import React ,{useState}from "react";
import axios from"axios";
import './login.css';
import { useNavigate } from "react-router-dom";
// import { Signup } from "./signup";
export function Login() {
    const [login, setLogin] = useState("");
    // setLogin({"St":"hii","str":"hlo"})
    // console.log(login)
    
    const navigate = useNavigate();
    function handleclick() {
        navigate('Signup')
    }
    function dashclick() {
        axios.post('http://localhost:3000/',login)
          .then(function (response) {
            console.log(response);
            navigate('Dashboard')
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        // <div>THIS IS LOGIN

        //     <button className='button' onClick={handleclick}>
        //         Signup!!
        //     </button>
        //     <button className='button' onClick={dashclick}>
        //            login!!
        //     </button>
        // </div>
        <div className="logincontainer">
            <div className="box">
                <h1>LOGIN</h1>
                <div className="inputfields">
                    <label>USERNAME</label>
                    <input type="text" onChange={(d)=>{setLogin({...login,name:d.target.value})}} className="input" placeholder="username"/>
                </div>
                <div className="inputfields">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password"  onChange={(d)=>{setLogin({...login,password:d.target.value})}} className="input" placeholder="password"/>
                </div>
                <div className="btncontainer">
                 <button className="button" onClick={dashclick}>LOGIN!</button>
                 <button className="button" onClick={handleclick}>SIGNUP!</button>
                </div>
            </div>
        </div>

    )
}