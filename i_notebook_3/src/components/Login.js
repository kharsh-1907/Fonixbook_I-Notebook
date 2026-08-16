import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [cedentrials, setCedentrials] = useState({ email: "", password: "" })

    const navigate = useNavigate()
    const handelsubmit = async (e) => {
        e.preventDefault();
        const result = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: cedentrials.email, password: cedentrials.password }),
        })
        const json = await result.json();
        console.log(json)
        if (json.success) {
            // save to local-Storage & redirect .
            localStorage.setItem('token', json.authtoken);
            navigate('/')
            props.ShowAlt("LoggedIn Successfully", "success")
        }
        else {
            props.ShowAlt("Invalid cedentrials!!!", "danger")
        }
    }
    const onChange = (e) => {
        // console.log(e.target.value)
        setCedentrials({ ...cedentrials, [e.target.name]: e.target.value })

    }

    return (
        <>
            <form className='container m-auto p-4 ' onSubmit={handelsubmit} style={{opacity:"95%"}}>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label"><h3>Email</h3></label>
                    <input type="email" className="form-control" name='email' value={cedentrials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><h3>Password</h3></label>
                    <input type="password" className="form-control" name='password' value={cedentrials.password} id="exampleInputPassword1" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}

export default Login
