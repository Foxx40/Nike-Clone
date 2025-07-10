import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../contants";
import { hamburger } from "../assets/icons";
import { useState } from "react";
const Nav = () => {
 const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            className="logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              ></a>{" "}
              {link.label}
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block relative ">
          <img src={hamburger} alt="" width={25} height={25} onClick={toggle} />
          {
            isOpen && (
              <ul className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-4 w-48 ">
                {navLinks.map((link, index) => (
                  <li key={index} className="py-2+ hover:bg-gray-100 ">
                    <a
                      href={link.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray ml-2 "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </nav>
    </header>
  );
};

export default Nav;
