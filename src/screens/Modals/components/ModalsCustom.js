// import React from 'react';

// const ModalsCustom = ({ isOpen, onClose }) => {
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

// export default ModalsCustom;
// src/ModalsCustom.js
import React, { useEffect } from 'react';
import { cdImg } from '../../../assets/mediaCall';

const ModalsCustom = ({ isOpen, onClose }) => {
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
      <div><img className=' w-full' src={cdImg.OS1} alt="" /></div>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center pt-5">Custom Software Solutions</h2>
        <p className="text-gray-700 text-justify">
          Codewolfers excels in providing bespoke software solutions tailored to your unique business challenges. Our team of experienced developers collaborates with you to understand your requirements and develop software that enhances efficiency, productivity, and competitiveness. Whether you need enterprise software, automation tools, or bespoke business applications, we deliver high-quality, scalable solutions that drive growth and success.
        </p>
        </div>
      </div>
    </div>
  );
};

export default ModalsCustom;
