// import React, { useState } from "react";
// import { cdImg } from "../assets/mediaCall";
// import { Link } from "react-router-dom";
// import { MdOutlineMenu, MdClose } from "react-icons/md";

// const Navbar = ({scrollToSection }) => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <nav className="bg-[#007DFE] text-white shadow-lg">
//       <div className="py-3 flex items-center justify-between w-[90%] mx-auto">
//         {/* Logo and Branding */}
//         <div className="flex items-center gap-5">
//           <img
//             className="h-[80px] w-[80px] rounded-full"
//             src={cdImg.logo}
//             alt="CodeWolfers Logo"
//           />
//           <div className="lmd:hidden">
//             <h1 className="font-extrabold text-[25px] oswald">CodeWolfers</h1>
//             <h2 className="font-bold oswald">Ideas Into Code</h2>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <ul className="flex items-center gap-5 oswald lmd:hidden">
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('/')}>
//               Home
//             </li>
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('introduction')}>
//               About Us
//             </li>
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('missionVision')}>
//               Mission & Vision
//             </li>
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('services')}>
//              Services
//             </li>
//             {/* <li>
//               <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//                 <button>Hire Us</button>
//               </Link>
//             </li> */}
//           </ul>
//         </div>

//         <div>
//           {click && (
//             <ul className="dm flex flex-col gap-5">
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('/')}>
//                Home
//               </li>
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('introduction')}>
//                 About Us
//               </li>
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('missionVision')}>
//                 Mission & Vision
//               </li>
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('services')}>
//                 Services
//               </li>
//               <li>
//                 <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//                   <button>Hire Us</button>
//                 </Link>
//               </li>
//               <div>
//                 <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//                   <button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 px-4 rounded-md hover:opacity-80 duration-300">
//                     Contact Us
//                   </button>
//                 </Link>
//               </div>
//             </ul>
//           )}
//         </div>

//         {/* Contact Us Button */}
//         <div className="lmd:hidden">
//           <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//             <button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 px-4 rounded-md hover:opacity-80 duration-300">
//               Contact Us
//             </button>
//           </Link>
//         </div>

//         <div className="hidden lmd:block relative">
//           {click ? (
//             <MdClose
//               className="HamburgerMenu absolute right-2 bottom-[105px]"
//               size="30px"
//               color="white"
//               onClick={handleClick}
              
//             />
//           ) : (
//             <MdOutlineMenu
//               className="HamburgerMenu"
//               size="30px"
//               color="white"
//               onClick={handleClick}
//             />
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { cdImg } from "../assets/mediaCall";
// import { Link } from "react-router-dom";
// import { MdOutlineMenu, MdClose } from "react-icons/md";

// const Navbar = ({ scrollToSection }) => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <nav className="bg-[#007DFE] text-white shadow-lg">
//       <div className="py-3 flex items-center justify-between w-[90%] mx-auto lmd:flex-row-reverse">
//         {/* Logo and Branding */}
//         <div className="flex items-center gap-5">
//           <img
//             className="h-[80px] w-[80px] rounded-full"
//             src={cdImg.logo}
//             alt="CodeWolfers Logo"
//           />
//           <div className="lmd:hidden">
//             <h1 className="font-extrabold text-[25px] oswald">CodeWolfers</h1>
//             <h2 className="font-bold oswald">Ideas Into Code</h2>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <ul className="flex items-center gap-5 oswald lmd:hidden">
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('/')}>
//               Home
//             </li>
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('introduction')}>
//               About Us
//             </li>
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('missionVision')}>
//               Mission & Vision
//             </li>
//             <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('services')}>
//              Services
//             </li>
//           </ul>
//         </div>

//         <div>
//           {click && (
//             <ul className="dm flex flex-col gap-5">
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('/')}>
//                Home
//               </li>
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('introduction')}>
//                 About Us
//               </li>
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('missionVision')}>
//                 Mission & Vision
//               </li>
//               <li className="hover:text-gray-300 duration-300 text-[18px]" onClick={() => scrollToSection('services')}>
//                 Services
//               </li>
//               <li>
//                 <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//                   <button>Hire Us</button>
//                 </Link>
//               </li>
//               <div>
//                 <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//                   <button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 px-4 rounded-md hover:opacity-80 duration-300">
//                     Contact Us
//                   </button>
//                 </Link>
//               </div>
//             </ul>
//           )}
//         </div>

//         {/* Contact Us Button */}
//         <div className="lmd:hidden">
//           <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
//             <button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 px-4 rounded-md hover:opacity-80 duration-300">
//               Contact Us
//             </button>
//           </Link>
//         </div>

//         <div className="hidden lmd:block relative">
//           {click ? (
//             <MdClose
//               className="HamburgerMenu absolute bottom-[105px]"
//               size="30px"
//               color="white"
//               onClick={handleClick}
              
//             />
//           ) : (
//             <MdOutlineMenu
//               className="HamburgerMenu"
//               size="30px"
//               color="white"
//               onClick={handleClick}
//             />
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { cdImg } from "../assets/mediaCall";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ scrollToSection }) => {
  const [click, setClick] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    if (click) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [click]);

  return (
    <nav className="bg-[#007DFE] text-white shadow-lg">
      <div className="py-3 flex items-center justify-between w-[90%] mx-auto lmd:flex-row-reverse">
        {/* Logo and Branding */}
        <div className="flex items-center gap-5">
          <img
            className="h-[80px] w-[80px] rounded-full"
            src={cdImg.logo}
            alt="CodeWolfers Logo"
          />
          <div className="lmd:hidden">
            <h1 className="font-extrabold text-[25px] oswald">CodeWolfers</h1>
            <h2 className="font-bold oswald">Ideas Into Code</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex items-center gap-5 oswald lmd:hidden">
            <li
              className="hover:text-gray-300 duration-300 text-[18px]"
              onClick={() => scrollToSection('/')}
            >
              Home
            </li>
            <li
              className="hover:text-gray-300 duration-300 text-[18px]"
              onClick={() => scrollToSection('introduction')}
            >
              About Us
            </li>
            <li
              className="hover:text-gray-300 duration-300 text-[18px]"
              onClick={() => scrollToSection('missionVision')}
            >
              Mission & Vision
            </li>
            <li
              className="hover:text-gray-300 duration-300 text-[18px]"
              onClick={() => scrollToSection('services')}
            >
              Services
            </li>
          </ul>
        </div>

        <div ref={menuRef}>
          {click && (
            <ul className="dm flex flex-col gap-5">
              <li
                className="hover:text-gray-300 duration-300 text-[18px]"
                onClick={() => {
                  scrollToSection('/');
                  setClick(false);
                }}
              >
                Home
              </li>
              <li
                className="hover:text-gray-300 duration-300 text-[18px]"
                onClick={() => {
                  scrollToSection('introduction');
                  setClick(false);
                }}
              >
                About Us
              </li>
              <li
                className="hover:text-gray-300 duration-300 text-[18px]"
                onClick={() => {
                  scrollToSection('missionVision');
                  setClick(false);
                }}
              >
                Mission & Vision
              </li>
              <li
                className="hover:text-gray-300 duration-300 text-[18px]"
                onClick={() => {
                  scrollToSection('services');
                  setClick(false);
                }}
              >
                Services
              </li>
              {/* <li>
                <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
                  <button>Hire Us</button>
                </Link>
              </li> */}
              <div>
                <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
                  <button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 px-4 rounded-md hover:opacity-80 duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>
            </ul>
          )}
        </div>

        {/* Contact Us Button */}
        <div className="lmd:hidden">
          <Link to="https://forms.gle/EtbCtMRqog2JkMnM6">
            <button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 px-4 rounded-md hover:opacity-80 duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="hidden lmd:block relative">
          {!click && (
            <MdOutlineMenu
              className="HamburgerMenu"
              size="30px"
              color="white"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
