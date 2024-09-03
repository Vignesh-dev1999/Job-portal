import { useDispatch, useSelector } from 'react-redux';
import { log, timeLog } from 'console';
import { useEffect, useState } from 'react';
import { searchData } from '../slices/searchData';
import { selectData } from '../slices/dataSlice';

 function Search  () {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const [searchDeatils, setSearchDetails] = useState({
        role: "",
        skills: "",
        location: ""
    })
    const handleSearchChange = (e: any) => {
        setSearchDetails({ ...searchDeatils, [e.target.name]: e.target.value })
    };

    const handleCLick = (e: any) => {
        console.log(searchDeatils);
        
        let updateData = filterBySearch(data, searchDeatils.role, searchDeatils.skills, searchDeatils.location)
        // let updateData = filterBySkills(data, searchDeatils.skills)
        dispatch(searchData(updateData));
    }

    function filterBySearch(data: Array<any>, role: String, skills: String, location: String) {
        let escapedTitle = role.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let escapedSkills = skills.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let escapedLocation = location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let rolePattern = new RegExp(escapedTitle, 'i');
        let skillsPattern = new RegExp(escapedSkills, 'i');
        let locationPattern = new RegExp(escapedLocation, 'i');
        let filteredData = data
        if (role) {
            filteredData = filteredData.filter((jobs: any) => {
                if (rolePattern.test(jobs["Job Title"])) {
                    return jobs;
                }
            })
        }
        if (skills) {
            filteredData = filteredData.filter((jobs: any) => {
                if (skillsPattern.test(jobs["Skills Required"])) {
                    return jobs;
                }
            })
        }

        if (location) {
            filteredData = filteredData.filter((jobs: any) => {
                if (locationPattern.test(jobs["Location"])) {
                    return jobs;
                }
            })
            console.log(filteredData);
            
        }

        return filteredData;
    }

    return (
        <div id="search" className="d-flex align-items-center " style={{ height: "30vh", background: "linear-gradient(to right, #007b, #661f21)" }}>
            <div className="  flex-wrap gap-2  w-100" >
                <input style={{marginLeft:"30vh" , width:"30%",marginBottom:"10px"}} className="form-control me-2 w-50" type="Role" placeholder="Role" aria-label="Search" name='role' onChange={handleSearchChange} />
                <input style={{marginLeft:"30vh"}} className="form-control me-2 w-50" type="Skills" placeholder="Skills" aria-label="Search" name='skills' onChange={handleSearchChange} />
                </div>
                <div className="w-100">

                <input className="form-control me-2 w-50" type="Location" placeholder="Location" aria-label="Search" name='location' onChange={handleSearchChange} />
                <button style={{marginTop:"10px", marginLeft:"20vh", backgroundColor:"#007b" , color:"white"}} className="btn " onClick={handleCLick} >Search</button>
            </div>
        </div>
    )

}
export default Search;