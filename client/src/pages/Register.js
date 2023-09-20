import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate();

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("/auth/register", inputs)
            navigate("/login")
        } catch (err) {
            //path for error message
            setError(err.response.data)
        }
    };

    return (
        <div className="auth">
            <h1 className="title">Register</h1>
            <div className="container is-max-desktop">
                <form className="box">
                    <div className="field">
                        <div className="label">Username</div>
                        <div className="control">
                            <input required className="input" type="text" placeholder="username" name='username' onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input required className="input" type="email" placeholder="email" name='email' onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input required className="input" type="password" placeholder="********" name='password' onChange={handleChange}></input>
                        </div>
                    </div>

                    <button onClick={handleSubmit} className="button is-primary">Register</button>
                    {err && <p className="has-text-danger"> {err} </p>}
                    <br></br>
                    <span><Link to="/Login">Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Register;
