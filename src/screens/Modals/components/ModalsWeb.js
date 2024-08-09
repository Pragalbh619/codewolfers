// // src/Modal.js
// import React from 'react';

// const ModalsWeb = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-8 max-w-md w-full">
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right">X</button>
//         <div className="flex flex-col items-center">
//           <img src="https://via.placeholder.com/150" alt="Placeholder" className="mb-4" />
//           <h2 className="text-2xl font-bold mb-2">Modal Heading</h2>
//           <p className="text-gray-700 text-center">
//             This is a paragraph inside the modal. You can put any content here.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalsWeb;
// src/ModalsWeb.js
import React, { useEffect } from 'react';
import { cdImg } from '../../../assets/mediaCall';

const ModalsWeb = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'modal-overlay') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="modal-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative flex flex-col">
      <div><img className=' w-full' src={cdImg.WD1} alt="" /></div>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center pt-5">Web Development</h2>
        <p className="text-gray-700 text-justify">
          At Codewolfers, we craft stunning, responsive, and user-friendly websites tailored to your business needs. Our web development team leverages the latest technologies and industry best practices to build websites that not only look great but also perform seamlessly across all devices. Whether you need a simple informational site or a complex e-commerce platform, we have the expertise to deliver solutions that drive engagement and conversions.
        </p>
        </div>
      </div>
    </div>
  );
};

export default ModalsWeb;
