import React from 'react';
import { NavLink } from 'react-router-dom';
import { navbarItems } from './NavbarItems';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src="https://seeklogo.com/images/R/react-spring-logo-757E1EF5B5-seeklogo.com.png" alt="react-spring logo" height="30" width="30"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav">
                    {/* <NavLink exact to="/" className="nav-link nav-item">
                        Home
                    </NavLink>
                    <NavLink to="/basic" className="nav-link nav-item">
                        Basic
                    </NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/basic/simplespring">Simple Spring</NavLink>
                                <NavLink className="dropdown-item" to="/basic/flip-page">Flip Page</NavLink>
                            </div>
                    </li>
                    <NavLink to="/advanced" className="nav-link nav-item">
                        Advanced
                    </NavLink> */}
                    <NavLink exact className="nav-item nav-link" to="/">Home</NavLink>
                    {
                        navbarItems.map(item => {
                            const { name, path, branch } = item;
                            return (
                                <>
                                <NavLink className="nav-item nav-link" to={path}>{name}</NavLink>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    branch.map(subitem => {
                                        const { name, path } = subitem;
                                        return (
                                        <NavLink className="dropdown-item" to={path}>{name}</NavLink>
                                        )    
                                    }) 
                                }
                                </div>
                                </li>
                                </>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
