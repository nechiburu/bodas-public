import React from 'react';
import styled from 'styled-components';
import Header2 from '../../components/header2';
import Link from "next/link";
const MenuContainer = styled.div`
  background-color: #f5f5f5;
  width: 200px;
  height: 100vh;
  padding: 20px;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;

  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

const Button = styled.button`
  background-color: #f5f5f5;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }

`;


// className="topbar"

const AdminMenu = () => {
  return (
    <>
   

    {/* <MenuContainer >
      
      <h3 >Dashboard</h3>
 
      <MenuItem><Link  className="navbar-brand" href="/agregar-novios">Agregar Novios</Link></MenuItem>
      
      <MenuItem><Link  className="navbar-brand" href="/agregar-regalos">Agregar regalos</Link></MenuItem>
      
      <MenuItem><Link  className="navbar-brand" href="/agregar-ordenes">Ordenes </Link></MenuItem>
      
      <MenuItem><Link className="navbar-brand" href="/ajustes">Ajustes</Link></MenuItem>
      
                 
                


    </MenuContainer> */}



<div className="sidebar-wrapper group">
      <div id="bodyOverlay" className="w-screen h-screen fixed top-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-10 hidden"></div>
      <div className="logo-segment">
        <a className="flex items-center" href="index.html">
         
          <span className="ltr:ml-3 rtl:mr-3 text-xl font-Inter font-bold text-slate-900 dark:text-white">Dashboard</span>
        </a>
      
        <div id="sidebar_type" className="cursor-pointer text-slate-900 dark:text-white text-lg">
          <span className="sidebarDotIcon extend-icon cursor-pointer text-slate-900 dark:text-white text-2xl">
        <div className="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150 ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"></div>
      </span>
          <span className="sidebarDotIcon collapsed-icon cursor-pointer text-slate-900 dark:text-white text-2xl">
        <div className="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150"></div>
      </span>
        </div>
        <button className="sidebarCloseIcon text-2xl">
      
        </button>
      </div>
      <div id="nav_shadow" className="nav_shadow h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none
      opacity-0"></div>
      <div className="sidebar-menus bg-white dark:bg-slate-800 py-2 px-4 h-[calc(100%-80px)] overflow-y-auto z-50" id="sidebar_menus">
        <ul className="sidebar-menu">
          <li className="sidebar-menu-title"><Link  href="/agregar-novios">Agregar Novios</Link></li>
          <li className="sidebar-menu-title"><Link  href="/agregar-regalos">Agregar regalos</Link></li>
          <li className="sidebar-menu-title"><Link  href="/agregar-ordenes">Ordenes </Link></li>

          <li className="sidebar-menu-title"> <Link href="/ajustes">Ajustes</Link></li>
      
        

     


    

    
        </ul>
    
 
      </div>
    </div>

    </>
  );
};

export default AdminMenu;
