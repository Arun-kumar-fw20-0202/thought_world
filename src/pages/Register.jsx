import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userRegistration } from '../redux/registration/action.register'
import "../styles/register.css"

let userData = {
    phone: '',
    gender: '',
    name: '',
    lname: '',
    gmail: '',
    password: '',
    avatar: '',
}

export const Register = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((store) => {
        return store.isLoading
    })

    const [data, setData] = useState(userData);

    const { phone, gender, name, lname, gmail, password } = data

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(userRegistration(data))
    }

    useEffect(() => {
        if(!isLoading){
            setData(userData)
        }
    },[isLoading])
    

  return (
    <>
        <div className="Rmain">
            <div className="box">
                <div className="imgBx">
                    <h1>Register</h1>
                    <img src="../../public/loginimg.jpg" />
                    <h3><a href="#">Term Policy & Term of Service</a></h3>
                </div>
                {/* <!--  --> */}
                <div className="box2">
                    {/* <!-- form --> */}
                    <form autoComplete="off" onSubmit={(e) => handleRegister(e)}>
                    <div className="inputBx">
                        <input required="required" type="text" value={name} name="name" minLength="0" maxLength="25" onChange={(e) => handleChange(e)} />
                        <span className="text">Name</span>
                        <span className="line"></span>
                    </div>
                    {/* <!--  --> */}

                    <div className="inputBx">
                        <input required="required" type="text" name="lname" value={lname} onChange={(e) => handleChange(e)} />
                        <span className="text">Last Name</span>
                        <span className="line"></span>
                    </div>
                    {/* <!--  -->	 */}
                    {/* <!--  --> */}
                    <div className="inputBx">
                        <input required="required" type="tel" name="phone" value={phone}  minLength="0" maxLength="10" onChange={(e) => handleChange(e)} />
                        <span className="text">Phone No:</span>
                        <span className="line"></span>
                    </div>
                    {/* <!--  -->				 */}
                    <div className="inputBx">
                        <input required="required" type="email" value={gmail} name="gmail" onChange={(e) => handleChange(e)} />
                        <span className="text">Gmail</span>
                        <span className="line"></span>
                    </div>	
                    {/* <!--  --> */}
                    <div className="inputBx">
                        <input required="required" type="password" value={password} name="password" onChange={(e) => handleChange(e)} />
                        <span className="text">password</span>
                        <span className="line"></span>
                    </div>
                    {/* <!--  --> */}
                    <div className="inputBx">
                        <select name="gender" value={gender} onChange={(e) => handleChange(e)} >
                            <option disabled="" required value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div>
                    <div className="btnBx">
                        <input disabled={isLoading} type="submit" value="Register" /> 
                        or <Link to="/login">Sign In</Link>
                        {isLoading ? <p>Please wait...</p> : ""}
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}
