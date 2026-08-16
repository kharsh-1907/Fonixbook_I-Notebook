import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
  const [cedentrials, setCedentrials] = useState({ name: "", email: "", password: "" });
  // instead of useHistory this is new updated version of react-dom.
  const navigate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:5000/api/auth/createUser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: cedentrials.name, email: cedentrials.email, password: cedentrials.password }),
    })
    const json = await result.json();
    console.log(json)
    if (json.success) {

      // save to local-Storage & redirect .
      localStorage.setItem('token', json.authtoken);
      props.ShowAlt("SignUp successfully done!!","success");
      navigate('/');
    }
    else{
      props.ShowAlt("Invalid cedentrials!!!","danger")
    }
  }

  const onChange = (e) => {
    setCedentrials({ ...cedentrials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <form className='container m-auto p-4 ' onSubmit={handelsubmit} style={{opacity:"95%"}}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name='name' value={cedentrials.name} onChange={onChange} aria-describedby="emailHelp" minLength={3} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={cedentrials.email} onChange={onChange} aria-describedby="emailHelp" minLength={2} required />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" name='password' value={cedentrials.password} onChange={onChange} id="exampleInputPassword1" minLength={6} required />
        </div>
        <button type="submit" className="btn btn-primary">SignUp</button>
      </form>
    </>
  )
}

export default Signup
