import React from 'react';
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../slices/dataSlice';
import { selectSkills } from '../slices/userSlice';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import skills from "../data/skills.json";
import AsyncSelect from 'react-select/async';
import Form from 'react-bootstrap/Form';
import RichTextEditor from './RichTextEditor';

interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    skill: string;
    aboutMe: string;
}

interface MyFormErrors {
    firstName: string;
    lastName: string;
    email: string;
    skill: string;
    aboutMe: string;
}

interface SkillsOption {
    value: string;
    label: string;
}

function Apply  ()  {


    const initialValues: MyFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        skill: '',
        aboutMe: '',
    };

    const initialErrors: MyFormErrors = {
        firstName: '',
        lastName: '',
        email: '',
        skill: '',
        aboutMe: '',
    };

    const validate = (values: MyFormValues) => {
        const errors = initialErrors;
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const searchData = useSelector(selectData);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    let currentJob = searchData[parseInt(id || "")];
    if (loading) {
        return <div className='d-flex justify-content-center ' style={{ height: "80vh", alignItems: "center" }}> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }

    console.log(skills);

    const filterColors = (inputValue: string) => {
        return skills.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const promiseOptions = (inputValue: string) =>
        new Promise<SkillsOption[]>((resolve) => {
            setTimeout(() => {
                resolve(filterColors(inputValue));
            }, 1000);
        });
        
    return (
        <div className="d-md-flex">
            <div className="">
                <div className="card p-3" style={{marginLeft:"30px", marginTop:"30px", width:"100vh", marginRight:"20px"}}>
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
                                <span key={skillIndex} className="badge  me-1" style={{backgroundColor:"#007b", marginLeft:"4px"}}>{skill}</span>
                            ))
                        ) : (
                            <span>No skills listed</span>
                        )}
                    </p>
                    <p className="card-text">Description: {currentJob["Job Description"]}</p>
                </div>
            </div>


            <Form noValidate onSubmit={formik.handleSubmit} className='p-25 w-50 p-3' style={{backgroundColor:"#C0C0C0", marginLeft:"4px",marginTop:"28px",borderRadius:"10px", marginBottom:"25px"}}>
                <h2 className="text-center">Apply Now</h2>

                <Form.Group as={Col} style={{fontWeight:""}}>
                    <Form.Label>First name :</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? <div className='text-danger'> {formik.errors.firstName}</div> : null}
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Last name :</Form.Label>
                    <Form.Control
                        required
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? <div className='text-danger'>{formik.errors.lastName}</div> : null}
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Email : </Form.Label>
                    <Form.Control
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                    />
                    {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
                </Form.Group>
                <Form.Group as={Col} controlId="skills" className='mt-2'>
                    <Form.Label>Skills :</Form.Label>
                    <AsyncSelect
                        isMulti
                        cacheOptions
                        defaultOptions
                        loadOptions={promiseOptions}
                    />
                </Form.Group>
                <Form.Group as={Col} className='mt-2'>
                    <Form.Label>About me :</Form.Label>
                   <RichTextEditor/>
                    {formik.errors.aboutMe ? <div className='text-danger'>{formik.errors.aboutMe}</div> : null}
                </Form.Group>
                <Button type="submit" className='mt-2' style={{backgroundColor:"#007b", marginLeft:"45vh"}}>Submit</Button>
            </Form>


        </div>
    );
}

export default Apply;

