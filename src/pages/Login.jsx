import { Link, useNavigate } from "react-router-dom"
import "../styles/login.css"
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
// import { store } from "../store";
import { Authantication } from "../redux/loginReducer/action.login";


let userInput = {
    username: '',
    password: '',
}
export const Login = () => {
    const dispatch = useDispatch()    
    const navigate = useNavigate()
    const { isAuth, activeUser} = useSelector((store) =>{
        return store
    })
    console.log(isAuth)

    const handleCallbackResponse = (response) => {
        let userObj = jwt_decode(response.credential)
        dispatch(Authantication(userObj))
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "620150314608-nngruoh1gbevp4kbv5vir2h3on0fdnar.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: "outline", size : "large"}
        )
    },[])

    if(isAuth) {
        navigate("/profile")
    };

    return (
        <>
            <div className="Lmain">
                <div className="box">
                    <div className="imgBx">
                        <img src="../../public/loginimg5.jpg" />
                    </div>
                    {/* <!--  --> */}
                    <div className="box2">
                        <form  autoComplete="off">
                            <h1>Login</h1>
                                <div className="inputBx">
                                    <input required="" type="text" name="username" />
                                    <span className="text"> <i className="fa fa-user"></i> Name</span>
                                    <span className="line"></span>
                                </div>
                                <div className="inputBx">
                                    <input required="" type="Password" name="password" />
                                    <span className="text">Password</span>
                                    <span className="line"></span>
                                </div>
                                <div className="inputBx">
                                    <input type="submit" name="login" value="Login" />
                                    OR <Link to={"/register"}>SignUp</Link>
                                    <br />
                                    <br />
                                    <div id="signInDiv">

                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>        
        </>
    )
}