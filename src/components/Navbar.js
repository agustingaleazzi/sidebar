import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Data } from './Data';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#1B4079'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars" onClick={showSidebar}>
                    <FaIcons.FaBars/>
                </Link>
            </div>
            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className="menu-bar">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {Data.map((navItem, index) => {
                        return  (
                            <li key={index} className={navItem.className}>
                                <Link to={navItem.path}>
                                    {navItem.icon}
                                    <span>{navItem.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
