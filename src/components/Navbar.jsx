import { NavLink } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [isHamburgerActive, setHamburgerActive] = useState("false");

  const handleToggle = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <nav className='flex flex-wrap items-center justify-between w-full py-3 md:py-0 px-4 text-lg'>
      <div className="px-6 md:px-8">
        <h2 className="font-bold">
          <NavLink to='/'>jeffwang.py</NavLink>
        </h2>
      </div>
      <div className='h-6 w-6 cursor-pointer md:hidden block'
        onClick={handleToggle}><HamburgerIcon
        
      /></div>
      
      <div
        className={`${
          isHamburgerActive ? "hidden" : ""
        }  w-full md:flex md:items-center md:w-auto`}
      >
        <ul
          className='
              pt-4
              text-base
              md:flex
              md:justify-between 
              md:pt-0'
        >
          <li>
            <NavLink className='px-6 md:p-4 py-2 block font-normal hover:text-accent-pink' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='px-6 md:p-4 py-2 block font-normal hover:text-accent-pink' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='px-6 md:p-4 py-2 block font-normal hover:text-accent-pink' to='/projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className='px-6 md:p-4 py-2 block font-normal hover:text-accent-pink' to='/contacts'>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
