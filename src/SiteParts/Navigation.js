import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#">SPA Example</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigaatio" 
                    aria-expanded="false" aria-controls="#navigaatio" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navigaatio">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
