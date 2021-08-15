import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-info d-flex flex-column justify-content-between align-items-center p-5 m-5'>
            <h1>404 Error Page </h1>

           <h2 className='m-1'>404</h2>
            <div className="m-3">
                <Link to='/dashboard' className='btn btn-light'>Back To Home</Link>
            </div>


        </div>
    );
}

export default NotFound;