import React from 'react';
import { Link } from 'react-router-dom';




export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_git-hub">
                <Link to={{ pathname: "https://github.com/luisVidal97/lium-react-ui-library" }}  target="_blank">
                    <i className="fab fa-github fa-3x"></i>
                </Link> 
            </div>
        </div>
    );
}
