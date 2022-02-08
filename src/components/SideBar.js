import './NavigationBar.css';
//import useState hook to create menu collapse state
import React from "react";
//import react pro sidebar components
import {
    ProSidebar,
    SubMenu,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from 'react-router-dom';

import './Card.css'



const SideBar = () => {

    const openMenu = () => {
        var menuBar = document.getElementById("header");
        menuBar.style.width = "180px";
        menuBar.style.transition = "all 0.5s";
    };
    const closeMenu = () => {
        document.getElementById("header").style.width = "120px";
    };

    return (

        <div id="header" onMousemove={openMenu} onMouseLeave={closeMenu} onMouseOut={openMenu} >
            <ProSidebar>
                <SidebarContent>
                    <Menu>
                        <MenuItem className='activeClass' active={true} icon={<FiHome />}> <Link to="/"></Link> </MenuItem>
                        <SubMenu icon={<FaList />} >
                            <MenuItem className='subItems'><Link className='categories' to="/ScaryMovie"> Scary Movies</Link> </MenuItem>
                            <MenuItem className='subItems'><Link className='categories' to="/DramaMovies"> Drama Movies </Link> </MenuItem>
                            <MenuItem className='subItems'><Link className='categories' to="/FantasticMovies"> Fantastic Movies </Link></MenuItem>
                            <MenuItem className='subItems'><Link className='categories' to="/ActionMovies"> Action Movies </Link></MenuItem>
                            <MenuItem className='subItems'><Link className='categories' to="/FamilyMovies"> Family Movies </Link></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FaRegHeart />}> <Link to="/Like"></Link></MenuItem>
                        <MenuItem icon={<BiCog />}></MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem icon={<FiLogOut />}></MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>

           
        </div>

    );
};


export default SideBar;