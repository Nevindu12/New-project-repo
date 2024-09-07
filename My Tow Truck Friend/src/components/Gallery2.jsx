import React from 'react';
import Clock from '../assets/clock.png';
import Call from '../assets/call.png'; 
import Doller from '../assets/doller.png'; 

const Gallery2 = () => {
  return (
    <div className="flex justify-start items-center min-h-screen pl-15 lg:pl-60 -mt-52"> {/* Adjust pl-20 lg:pl-64 to move further right */}
      <div className="flex space-x-0"> 
        <div className="flex-none flex flex-col items-center justify-center h-48 w-64 bg-black p-4 text-white relative">
          <img src={Clock} alt="Clock" className="h-15 w-15 mb-2" />
          <div className="text-sm font-bold">Less than 30 Min Arrival</div> 
        </div>
        <div className="flex-none flex flex-col items-center justify-center h-48 w-60 bg-yellow-400 p-4 text-black relative">
          <img src={Call} alt="Call" className="h-10 w-10 mb-2" /> 
          <div className='text-sm font-bold'>24/7 service ​ Call (94) 77 002 2348</div> 
        </div>
        <div className="flex-none flex flex-col items-center justify-center h-48 w-60 bg-gray-500 p-4 text-black relative">
          <img src={Doller} alt="Doller" className="h-10 w-10 mb-2" /> 
          <div className='text-sm font-bold'>24/7 service​ Call (94) 77 002 2348</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
