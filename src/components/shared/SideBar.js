import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { hideComponentsTab, showComponentsTab } from '../../actions/ui';

export const SideBar = () => {

    const dispatch = useDispatch();
    const {showComponents} = useSelector( state => state.ui );

    const handleShowHideComponents = () => {
        if ( !showComponents ){
            dispatch(showComponentsTab());
        }else {
            dispatch(hideComponentsTab());
        }
    }

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
                    Get started
                </NavLink>
                <div className="sidebar__nav-item" onClick={ handleShowHideComponents }>Components</div>
                {
                    showComponents &&
                    (
                        <div className="sidebar__components">
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
                        </div>
                    )
                }
                
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/api/customize"
                >
                    Customize
                </NavLink>
                <NavLink 
                    activeClassName="sidebar__nav-item-active"
                    className="sidebar__nav-item" 
                    exact
                    to="/demo/login"
                >
                    Demo App
                </NavLink>
                
            </nav>
        </aside>
    )
}
