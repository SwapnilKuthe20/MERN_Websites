import React from 'react';
import { NavLink, replace } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center h-screen items-center gap-6 flex-col'>
            <h1 className='text-5xl'> Page Not Found </h1>
            <div className='text-blue-700 hover:text-purple-950 text-3xl'>
                <NavLink to={'/'} replace  > click here to Go to Home Page </NavLink>
            </div>
        </div >
    );
}

export default NotFound;
