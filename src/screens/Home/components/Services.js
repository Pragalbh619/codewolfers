// import React from 'react'

// const Services = () => {
//   return (
//     <div>
//         <div>
//             <h1 className='font-bold text-[35px] text-center'>Our Services</h1>
//             <div>
//                 <h1>Web Development</h1>
//                 <p>Creating responsive and visually appealing websites.</p>
//             </div>
//             <div>
//                 <h1>Mobile App Development</h1>
//                 <p>Designing user-friendly and functional mobile applications.</p>
//             </div>
//             <div>
//                 <h1>Custom Software Solutions</h1>
//                 <p>Developing tailored software solutions to meet specific business needs.</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Services


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { cdImg } from '../../../assets/mediaCall';

// const Services = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 650,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='w-[90%] mx-auto py-12'>
//       <h1 className="font-bold text-[60px] text-center mb-8 gradient-text
//   xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] oswald">Our Services</h1>
//       <div className='overflow-hidden'> {/* Prevent horizontal overflow */}
//         <Slider {...settings} className='px-4'>
//           <div className='p-4'>
//             <div className='bg-white shadow-md rounded-lg p-6'>
//               <img src={cdImg.WD1} alt="" className='w-full' />
//               <h2 className='text-xl font-semibold oswald pt-8'>Web Development</h2>
//               <p className='text-zinc-500 montserrat pt-2 line-clamp-3'>At Codewolfers, we craft stunning, responsive, and user-friendly websites tailored to your business needs. Our web development team leverages the latest technologies and industry best practices to build websites that not only look great but also perform seamlessly across all devices. Whether you need a simple informational site or a complex e-commerce platform, we have the expertise to deliver solutions that drive engagement and conversions.</p>
//             </div>
//           </div>
          
//           <div className='p-4'>
//             <div className='bg-white shadow-md rounded-lg p-6'>
//               <img src={cdImg.AD1} alt="" className='w-full' />
//               <h2 className='text-xl font-semibold oswald pt-8'>Mobile App Development</h2>
//               <p className='text-zinc-500 montserrat pt-2 line-clamp-3'>Our app development team at Codewolfers is dedicated to turning your ideas into innovative and functional mobile applications. We specialize in creating apps for both Android and iOS platforms, ensuring a seamless user experience and robust performance. From initial concept to final deployment, we work closely with you to design, develop, and launch apps that meet your specific goals and requirements.</p>
//             </div>
//           </div>
          
//           <div className='p-4'>
//             <div className='bg-white shadow-md rounded-lg p-6'>
//               <img src={cdImg.OS1} alt="" className='w-full' />
//               <h2 className='text-xl font-semibold oswald pt-8'>Custom Software Solutions</h2>
//               <p className='text-zinc-500 montserrat pt-2 line-clamp-3'>Codewolfers excels in providing bespoke software solutions tailored to your unique business challenges. Our team of experienced developers collaborates with you to understand your requirements and develop software that enhances efficiency, productivity, and competitiveness. Whether you need enterprise software, automation tools, or bespoke business applications, we deliver high-quality, scalable solutions that drive growth and success.</p>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Services;



// src/screens/Services.js
// src/screens/Services.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cdImg } from '../../../assets/mediaCall';
import ModalsWeb from './../../Modals/components/ModalsWeb';
import ModalsApp from './../../Modals/components/ModalsApp';
import ModalsCustom from './../../Modals/components/ModalsCustom';

const Services = () => {
  const [isWebModalOpen, setIsWebModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const openWebModal = () => setIsWebModalOpen(true);
  const closeWebModal = () => setIsWebModalOpen(false);

  const openAppModal = () => setIsAppModalOpen(true);
  const closeAppModal = () => setIsAppModalOpen(false);

  const openCustomModal = () => setIsCustomModalOpen(true);
  const closeCustomModal = () => setIsCustomModalOpen(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-[90%] mx-auto py-12'>
      <h1 className="font-bold text-[60px] text-center mb-8 gradient-text
        xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] oswald">
        Our Services
      </h1>
      <div className='overflow-hidden'>
        <Slider {...settings} className='px-4'>
          <div className='p-4'>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <img src={cdImg.WD1} alt="" className='w-full' />
              <h2 className='text-xl font-semibold oswald pt-8'>Web Development</h2>
              <p
                className='text-zinc-500 montserrat pt-2 line-clamp-3 cursor-pointer'
                onClick={openWebModal}
              >
                At Codewolfers, we craft stunning, responsive, and user-friendly websites tailored to your business needs. Our web development team leverages the latest technologies and industry best practices to build websites that not only look great but also perform seamlessly across all devices. Whether you need a simple informational site or a complex e-commerce platform, we have the expertise to deliver solutions that drive engagement and conversions.
              </p>
            </div>
          </div>
          
          <div className='p-4'>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <img src={cdImg.AD1} alt="" className='w-full' />
              <h2 className='text-xl font-semibold oswald pt-8'>Mobile App Development</h2>
              <p
                className='text-zinc-500 montserrat pt-2 line-clamp-3 cursor-pointer'
                onClick={openAppModal}
              >
                Our app development team at Codewolfers is dedicated to turning your ideas into innovative and functional mobile applications. We specialize in creating apps for both Android and iOS platforms, ensuring a seamless user experience and robust performance. From initial concept to final deployment, we work closely with you to design, develop, and launch apps that meet your specific goals and requirements.
              </p>
            </div>
          </div>
          
          <div className='p-4'>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <img src={cdImg.OS1} alt="" className='w-full' />
              <h2 className='text-xl font-semibold oswald pt-8'>Custom Software Solutions</h2>
              <p
                className='text-zinc-500 montserrat pt-2 line-clamp-3 cursor-pointer'
                onClick={openCustomModal}
              >
                Codewolfers excels in providing bespoke software solutions tailored to your unique business challenges. Our team of experienced developers collaborates with you to understand your requirements and develop software that enhances efficiency, productivity, and competitiveness. Whether you need enterprise software, automation tools, or bespoke business applications, we deliver high-quality, scalable solutions that drive growth and success.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <ModalsWeb isOpen={isWebModalOpen} onClose={closeWebModal} />
      <ModalsApp isOpen={isAppModalOpen} onClose={closeAppModal} />
      <ModalsCustom isOpen={isCustomModalOpen} onClose={closeCustomModal} />
    </div>
  );
};

export default Services;
