import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='container mt-3 sticky-md-top mb-3'>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#c8f0eb"}}>
                <div className="container-fluid">
                    <Link className='navbar-brand' to='/home'>
                        <img src='' alt='' width='' height='' className='d-inline-block alight-text-top'></img>
                        Travel App
                    </Link>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon"'></span>
                    </button>
                    <div className='collapse navbar-collapse d-flex justify-content-end' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/home'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'> | </span>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/plan'>
                                    Plan
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'> | </span>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/budget'>
                                    Budget
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'> | </span>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/travel-checklist'>
                                    Checklist
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;