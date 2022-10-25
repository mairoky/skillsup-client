import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;