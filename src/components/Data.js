import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

export const Data = [
    {
        title: 'Home',
        path: "/",
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Products',
        path: "/products",
        icon: <FaIcons.FaCartPlus />,
        className: 'nav-text'
    },
    {
        title: 'Mesagges',
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: "/about",
        icon: <FcIcons.FcAbout />,
        className: 'nav-text'
    }
];