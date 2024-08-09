import React from 'react';
import { cdImg } from '../assets/mediaCall';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = ({scrollToSection}) => {
  return (
    <footer className="bg-[#007DFE] text-white py-8 shadow-lg">
      <div className="w-[80%] mx-auto px-4">
        <div className=" md:flex md:flex-col md:justify-center md:items-center md:gap-10">
         <div className='flex justify-between md:flex md:flex-col md:justify-center md:items-center md:gap-10 xsm:gap-1'>
           {/* Company Info */}
           <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-5 mb-4">
              <img className="h-20 w-20 rounded-full" src={cdImg.logo} alt="CodeWolfers Logo" />
              <div>
                <h1 className="text-2xl font-extrabold oswald md:text-[50px] xs:text-[30px]">CodeWolfers</h1>
                <h2 className="text-lg font-bold oswald md:hidden">Ideas Into Code</h2>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="">
  <ul className="montserrat flex justify-center items-center space-x-10 xsm:hidden">
    <li className="hover:text-gray-300 duration-300"><a href="#home" onClick={() => scrollToSection('/')}>Home</a></li>
    <li className="hover:text-gray-300 duration-300"><a href="#about"  onClick={() => scrollToSection('introduction')}>About Us</a></li>
    <li className="hover:text-gray-300 duration-300"><a href="#contact" onClick={() => scrollToSection('missionVision')}>Mission & Vision</a></li>
    <li className="hover:text-gray-300 duration-300"><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
    {/* <Link to="https://forms.gle/EtbCtMRqog2JkMnM6"><li className="hover:text-gray-300 duration-300"><a href="https://forms.gle/EtbCtMRqog2JkMnM6">Hire Us</a></li></Link> */}
  </ul>
        </div>

         </div>

          {/* Contact Us */}
          <div className="flex flex-col ">
            {/* <h1 className="text-xl font-bold mb-4 oswald">Contact Us</h1> */}
            <ul className="montserrat space-y-2">
              <li className="hover:text-gray-300 duration-300 md:hidden"><a href="mailto:codewolfers@gmail.com"><span className="font-bold oswald">Email:</span> codewolfers@gmail.com</a></li>
              <li className="flex space-x-4">
                <a href="https://www.instagram.com/codewolfer/" className="hover:text-gray-300 duration-300"><FaInstagram className="h-6 w-6" /></a>
                <a href="https://www.linkedin.com/company/codewolfers/" className="hover:text-gray-300 duration-300"><FaLinkedin className="h-6 w-6" /></a>
                <a href="https://x.com/codewolfers" className="hover:text-gray-300 duration-300"><FaSquareXTwitter className="h-6 w-6" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} CodeWolfers. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;



// import React from 'react';
// import { cdImg } from '../assets/mediaCall';
// import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[#007DFE] text-white py-8 shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
//           {/* Company Info */}
//           <div className="flex flex-col items-center md:items-start">
//             <div className="flex items-center gap-5 mb-4">
//               <img className="h-20 w-20 rounded-full" src={cdImg.logo} alt="CodeWolfers Logo" />
//               <div>
//                 <h1 className="text-2xl font-extrabold oswald">CodeWolfers</h1>
//                 <h2 className="text-lg font-bold oswald">Ideas Into Code</h2>
//               </div>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="flex flex-col">
//             <h1 className="text-xl font-bold mb-4 oswald">Links</h1>
//             <ul className="montserrat space-y-2">
//               <li className="hover:text-gray-300 duration-300"><a href="#home">Home</a></li>
//               <li className="hover:text-gray-300 duration-300"><a href="#about">About Us</a></li>
//               <li className="hover:text-gray-300 duration-300"><a href="#contact">Contact Us</a></li>
//               <li className="hover:text-gray-300 duration-300"><a href="#services">Services</a></li>
//               <li className="hover:text-gray-300 duration-300"><a href="#hire">Hire Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="flex flex-col">
//             <h1 className="text-xl font-bold mb-4 oswald">Contact Us</h1>
//             <ul className="montserrat space-y-2">
//               <li className="hover:text-gray-300 duration-300"><a href="mailto:codewolfers@gmail.com"><span className="font-bold oswald">Email:</span> codewolfers@gmail.com</a></li>
//               <li className="flex space-x-4">
//                 <a href="https://instagram.com" className="hover:text-gray-300 duration-300"><FaInstagram className="h-6 w-6" /></a>
//                 <a href="https://linkedin.com" className="hover:text-gray-300 duration-300"><FaLinkedin className="h-6 w-6" /></a>
//                 <a href="https://twitter.com" className="hover:text-gray-300 duration-300"><FaTwitter className="h-6 w-6" /></a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
