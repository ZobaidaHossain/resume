import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import NavLink from "./NavLink";


import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navbars = <>
<li ><a  href="#about">About</a></li>
<li><a  href="#project">Projects</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#education">Education</a></li>
<li><a  href="#contact">Contact</a></li>
</>;

  const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            PORTFOLIO
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
               
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded  hover:text-white">
                {navbars}
            
            </ul>
          </div>
        </div>
       
      </nav>
    );
  };

export default Navbar;