import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <aside className='sidebar'>
            <div className='sidebar__title'>
            <Link 
                to="/"
            >
                <h3>Lium UI library</h3>
            </Link>
            </div>
            <nav className="sidebar__nav">
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/getting-start"
                >
                    Getting start
                </NavLink>
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/button"
                >
                    Button
                </NavLink>
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/input-text"
                >
                    InputText
                </NavLink>
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/input-number"
                >
                    InputNumber
                </NavLink>
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/select"
                >
                    SelectInput
                </NavLink>
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/autocomplete"
                >
                    Autocomplete
                </NavLink>
            </nav>
        </aside>
    )
}
