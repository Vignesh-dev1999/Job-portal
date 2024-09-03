import { Link } from "react-router-dom"
import  Login  from "../pages/Login"
import logo from "../assets/nav/logo.png"

function Navbar (){
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg navbar-light border" >
                <div className="container-fluid" style={{marginTop:"3vh",marginBottom:"2vh"}}>
                    {/* <Link to="/" className="navbar-brand logo">OneData</Link> */}
                    <Link to="/">
                    
                    <img  style={{height:"5vh", marginLeft:"22px"}} src={logo}></img>
                    </Link> 
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"50vh",fontSize:"20px"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Jobs</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="#">Companies</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                        <div className="d-flex g-1">
                            <Link to="/login" className=""><button style={{backgroundColor:"#661f21", color:"white"}} type="button" className="btn  me-2">Login</button></Link>
                            <Link to="/register"  className=""> <button type="button" className="btn " style={{backgroundColor:"#007b", color:"white", fontSize:"15px", borderRadius:"5px",}}>Register</button></Link>

                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navbar;