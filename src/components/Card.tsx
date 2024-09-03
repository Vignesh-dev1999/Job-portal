import { Link } from "react-router-dom"


interface JobCardProps {
    title: string;
    company: string;
    location: string;
    exp: string; // Adjust type based on your data (number of years, range, etc.)
    skills: string[]; // Array of string representing required skills
    descp: string;
    id: number | string; // Adjust type based on your actual ID data type
  }

function Card  (props: JobCardProps)  {
    return (
        <div className=" mb-4">
            <div className="card p-3" style={{fontFamily:"inherit"}}>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-subtitle mb-2 text-muted d-flex justify-content-between">
                    <h5>{props.company}</h5>
                    <span className='fs-0'>Location: {props.location}</span>
                </div>
                <p className="card-text">Experience: {props.exp}</p>
                <p className="card-text">
                    Skills Required:
                    {props.skills && Array.isArray(props.skills) ? (
                        props.skills.map((skill: string, skillIndex: number) => (
                            <span key={skillIndex} className="badge  me-1" style={{backgroundColor:"#007b", marginLeft:"4px"}}>{skill}</span>
                        ))
                    ) : (
                        <span>No skills listed</span>
                    )}
                </p>
                <p className="card-text">Description: {props.descp}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/${props.id}`} className="link-light text-decoration-none"><button className="btn " style={{backgroundColor:"#661f21", color:"white"}}  >View</button></Link>
                    <Link to={`/${props.title}/${props.id}`} className="link-light text-decoration-none"><button className="btn " style={{backgroundColor:"#007b", fontSize:"15px", color:"white"}}>Apply</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card;