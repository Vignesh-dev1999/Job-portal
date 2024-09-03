import { MyCarousel } from "../components/Carousel";
import  Navbar  from "../components/Navbar";
import  Search  from "../components/Search";


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, selectData } from '../slices/dataSlice';
import jsonData from '../data/jobs.json';
import { Outlet } from "react-router-dom";



function Home ()  {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setData(jsonData));
    }, [dispatch]);

    return (
        <div className="home">
            <Navbar />
            <Search />
            <Outlet />
        </div>
    );

}
export default Home;