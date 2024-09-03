import registerIcon from "../assets/login/add.png"
// import lefticon from "../assets/login/login-illustration.png"
import google from "../assets/login/google.png"
import linkedIn from "../assets/login/linkedin.png"
import facebook from "../assets/login/facebook.png"
import "../styles/Login.scss"
import { Link } from "react-router-dom"
import logo from "../assets/nav/logo.png"
import log from "../assets/login/log.avif"

function Login  ()  {
    return (
        <div id="login">
            <nav style={{padding:"30px", paddingLeft:"10vh", paddingRight:"10vh", border:"1px solid lightgray", margin:"5vh",borderRadius:"10px"}}>
                <Link to="/">
                    
                    <img  style={{height:"5vh", marginLeft:"22px"}} src={logo}></img>
                    </Link> 
            
                <Link to="/register" className="link-light text-decoration-none">  <button style={{backgroundColor:"blue"}}><img src={registerIcon} alt="" />Register</button></Link>

            </nav>

            <div className="content">
                <div className="left">
                    <img style={{height:"60vh"}} src={log} alt="" />
                    <p>Create your profile now and be visible to the top recruiters in the world</p>
                </div>
                <div className="right">
                    <h3 style={{marginLeft:"25vh"}}> LOGIN</h3>
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
                        <label style={{fontWeight:"bold", }} htmlFor="username">Email ID / Phone Number</label>
                        <input type="text" name="username" id="username" placeholder="Enter Email ID/Phone Number" />
                        <button style={{backgroundColor:"#48D1CC"}} >Send OTP</button>
                        <a href="">Login via Password</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;