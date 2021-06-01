import React, {useContext} from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-2 pl-2">
                <span className="brand-logo">Mess</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li>
                        <button
                            className={'btn yellow darken-4 ml-1 waves-effect waves-light'}
                            onClick={logoutHandler}
                        >
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}