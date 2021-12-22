import React from 'react'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const Sidebar = () => {
    return (
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
            <ul className="nav flex-column text-white w-100">
                <a href="#" className="nav-link h3 text-white my-2">
                    MCGA
                </a>
                <li href="#" className="nav-link">
                    <span className="mx-2">Home</span>
                </li>
                <li href="#" className="nav-link">
                    <span className="mx-2">Gestionar</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
