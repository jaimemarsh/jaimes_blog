import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext} from "react";
import { AuthContext } from "../context/AuthContext"
// import axios from 'axios';

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
          await login(inputs)
            navigate("/")
        } catch (err) {
            //path for error message
            setError(err.response.data)
        }
    };


    return (
        <div className="auth">
            <h1 className="title">Login</h1>
            <div className="container is-max-desktop">
                <form className="box">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input required className="input" type="text" placeholder="Username" name="username" onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input required className="input" type="password" placeholder="********" name="password" onChange={handleChange} autoComplete="current-password"></input>
                        </div>
                    </div>

                    <button onClick={handleSubmit} className="button is-primary">Sign in</button>
                    {/* if theres an error show it here */}
                    {err && <p className="has-text-danger"> {err} </p>}
                    <br></br>
                    <span><Link to="/Register">Register</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Login;