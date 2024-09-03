import registerIcon from "../assets/login/add.png"
// import lefticon from "../assets/login/login-illustration.png"
import google from "../assets/login/google.png"
import linkedIn from "../assets/login/linkedin.png"
import facebook from "../assets/login/facebook.png"
import "../styles/Login.scss"
import { Link } from "react-router-dom"
import logo from "../assets/nav/logo.png"

import reg from "../assets/login/reg.png"




function Register  ()  {
    return (
        <div id="login">
            <nav style={{padding:"30px", paddingLeft:"10vh", paddingRight:"10vh", border:"1px solid lightgray", margin:"5vh",borderRadius:"10px"}}>
                {/* <h2><Link to="/" className="navbar-brand logo">OneData</Link></h2> */}
                <Link to="/">
                    
                    <img  style={{height:"5vh", marginLeft:"22px"}} src={logo}></img>
                    </Link> 
                <Link to="/login"> <button style={{backgroundColor:"blue"}}><img src={registerIcon} />Login</button></Link>
            </nav>

            <div className="content" style={{border:"border"}}>

                <div className="right">
                    <h3 style={{marginLeft:"23vh"}}>   REGISTRATION</h3>
                    <div className="oauth">
                        <div className="lable">
                            <img src={google} alt="" />
                            <p style={{marginTop:"12px"}}>Google</p>
                        </div>
                        <div className="lable">
                            <img src={linkedIn} alt="" />
                            <p style={{marginTop:"12px"}}>LinkedIn</p>
                        </div>
                        <div className="lable">
                            <img src={facebook} alt="" />
                            <p style={{marginTop:"12px"}}>Facebook</p>
                        </div>
                    </div>
                    <div className="or">
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>
                    <form action="">
                        <label  style={{fontWeight:"bolder"}} htmlFor="username">Mobile Number :</label>
                        <input type="text" name="username" id="username" placeholder="Enter Mobile Number" />

                        <label style={{fontWeight:"bolder"}} htmlFor="username">Email ID :</label>
                        <input type="text" name="username" id="username" placeholder="Enter Email ID" />

                        <label style={{fontWeight:"bolder"}} htmlFor="username">Password :</label>
                        <input type="text" name="username" id="username" placeholder="Enter Password" />
                        <button style={{backgroundColor:"#48D1CC"}}>Continue</button>
                    </form>
                </div>
                <div className="left">
                    <img style={{height:"65vh"}} src={reg} alt="" />
                    <p>Create your profile now and be visible to the top recruiters in the world</p>
                </div>
            </div>
        </div>
    )
}

export default Register;