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
// src/ModalsApp.js
import React, { useEffect } from 'react';
import { cdImg } from '../../../assets/mediaCall';

const ModalsApp = ({ isOpen, onClose }) => {
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
        <div><img className=' w-full' src={cdImg.AD1} alt="" /></div>
        <div>
        <h2 className="text-2xl font-bold mb-2 text-center pt-5">Mobile App Development</h2>
        <p className="text-gray-700 text-justify">
          Our app development team at Codewolfers is dedicated to turning your ideas into innovative and functional mobile applications. We specialize in creating apps for both Android and iOS platforms, ensuring a seamless user experience and robust performance. From initial concept to final deployment, we work closely with you to design, develop, and launch apps that meet your specific goals and requirements.
        </p>
        </div>
      </div>
    </div>
  );
};

export default ModalsApp;
