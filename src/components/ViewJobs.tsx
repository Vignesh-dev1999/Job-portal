import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { selectData } from '../slices/dataSlice';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

function Viewjob ()  {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const searchData = useSelector(selectData);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    let currentJob = searchData[parseInt(id || "")-1];
    console.log(currentJob);
    if (loading) {
        return <div className='d-flex justify-content-center ' style={{ height: "80vh", alignItems: "center" }}> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }
    return (
        <div id="ViewJobs" style={{marginLeft:"30px", marginTop:"30px", width:"100vh"}}>
            <div className="">
                <div className="card p-3" style={{fontFamily:"inherit"}}>
                    <h2 className="card-title">{currentJob["Job Title"]}</h2>
                    <div className="card-subtitle mb-2 text-muted d-flex justify-content-between">
                        <h5>{currentJob["Name of the company"]}</h5>
                        
                    </div>
                    <p className="card-text">Experience: {currentJob["Experience Required"]}</p>
                    <p><span className='fs-0'>Location: {currentJob["Location"]}</span></p>
                    <p className="card-text">
                        Skills Required:
                        {currentJob["Skills Required"] && Array.isArray(currentJob["Skills Required"]) ? (
                            currentJob["Skills Required"].map((skill: string, skillIndex: number) => (
                                <span key={skillIndex} className="badge  me-1" style={{backgroundColor:"#007b"}}>{skill}</span>
                            ))
                        ) : (
                            <span>No skills listed</span>
                        )}
                    </p>
                    <p className="card-text">Description: {currentJob["Job Description"]}</p>
                    <div className="d-flex justify-content-between">
                    <Link to={`/${currentJob["Job Title"]}/${id}`} className="link-light text-decoration-none"><button className="btn " style={{backgroundColor:"#007b", fontSize:"15px", color:"white"}}>Apply</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Viewjob;