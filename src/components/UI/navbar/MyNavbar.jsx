import React from 'react';
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/Posts">Посты</Link>
            </nav>
        </header>
    );
};

export default MyNavbar;
