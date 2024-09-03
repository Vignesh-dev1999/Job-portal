import { selectData } from '../slices/searchData';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import  Card  from './Card';
import Spinner from 'react-bootstrap/Spinner';

function Carrer  () {
    const searchData = useSelector(selectData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center ' style={{height:"80vh",alignItems:"center"}}> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }

    if (!Array.isArray(searchData)) {
        return <div>Error: Data format is incorrect.</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {searchData.length !== 0 ? searchData.map((item: any, index: any) => (
                    <Card title={item["Job Title"]} company={item["Name of the company"]} location={item["Location"]} exp={item["Experience Required"]} skills={item["Skills Required"]} descp={item["Job Description"]}  id={item.id}/>
                )): <div>
                        No data
                    </div>}
            </div>
        </div>
    )
}

export default Carrer;