import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./Nav.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Set state after initial render
    setScroll(scrollRef.current);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set the state after the initial render to avoid re-renders during scroll
    setScroll(scrollRef.current);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Services" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div
      className={`NavContent border-b-[1px] fixed justify-center items-center h-24 w-full z-10 px-10 text-white ${
        scroll > 0 ? "fixed top-0 w-full z-10" : ""
      }`}
    >
      <div className="flex pt-8 ">
        {/* Logo */}
        <h1 className="md:basis-1/4 lg:text-2xl text-lg NavHeader lg:pl-10 ">
          Sophia Buu
        </h1>

        {/* Desktop Navigation */}
        {/* <ul className="hidden md:flex  justify-center  items-center basis-1/2 ">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="lg:text-lg text-sm px-4 rounded-xl cursor-pointer duration-300 hover:text-teal-300"
            >
              {item.text}
            </li>
          ))}
        </ul> */}
        <ul className="hidden md:flex  NavUI justify-end pr-20  items-center basis-3/4 ">
          <li className=" px-4 rounded-xl cursor-pointer duration-300 ">
            <Link
              className=""
              activeClass="active"
              smooth
              spy
              to="About"
              offset={-100}
            >
              About
            </Link>
          </li>
          <li className="px-4 rounded-xl cursor-pointer duration-300 ">
            <Link
              className=""
              activeClass="active"
              smooth
              spy
              to="Experience"
              offset={-100}
            >
              Experience
            </Link>
          </li>
          <li className=" px-4 rounded-xl cursor-pointer duration-300 ">
            <Link
              className=""
              activeClass="active"
              smooth
              spy
              to="Papers"
              offset={-150}
            >
              Papers
            </Link>
          </li>
          <li className=" px-4 rounded-xl cursor-pointer duration-300 ">
            <Link
              className=""
              activeClass="active"
              smooth
              spy
              to="Contact"
              offset={-100}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="md:basis-1/4 NavHeader justify-start pl-20 flex ">
          <div>
            <button class="button-2" role="button">
              Contact
            </button>
          </div>
        </div> */}

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className="basis-1/4 md:hidden ml-auto flex-row-reverse pt-2 pl-20"
        >
          <div class>
            {" "}
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-24 w-[100%] h-full border-b border-r-gray-900 bg-[#f1f4f1] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <li className="p-4 border-b   duration-300  cursor-pointer border-gray-600">
          <Link
            className=""
            activeClass="active"
            smooth
            spy
            to="About"
            offset={-100}
            onClick={handleNav}
          >
            About
          </Link>
        </li>
        <li className="p-4 border-b   duration-300  cursor-pointer border-gray-600">
          <Link
            className=""
            activeClass="active"
            smooth
            spy
            to="Experience"
            offset={-100}
            onClick={handleNav}
          >
            Experience
          </Link>
        </li>
        <li className="p-4 border-b   duration-300  cursor-pointer border-gray-600">
          <Link
            className=""
            activeClass="active"
            smooth
            spy
            to="Papers"
            offset={-150}
            onClick={handleNav}
          >
            Papers
          </Link>
        </li>
        <li className="p-4 border-b   duration-300  cursor-pointer border-gray-600">
          <Link
            className=""
            activeClass="active"
            smooth
            spy
            to="Contact"
            offset={-100}
            onClick={handleNav}
          >
            Contact
          </Link>
        </li>
        {/* Mobile Navigation Items */}
      </ul>
    </div>
  );
};

export default Navbar;

// return (
//     <div
//       className={`bg-black flex justify-between items-center h-24 mx-auto px-4 text-white ${
//         scroll > 0 ? "fixed top-0 w-full z-10" : ""
//       }`}
//     >
//       {/* Logo */}
//       <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//             : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
