import React from "react";
import Clock from "../assets/clock.png";
import Call from "../assets/call.png";
import Dollar from "../assets/doller.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Service = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-0 max-w-screen-lg w-full ml-60">
          <div className="h-54 flex flex-col justify-center items-center relative">
            <img
              src={img2}
              className="w-full h-full object-cover"
              alt="Car 1"
            />
            <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">
              Tire Change
            </h3>
          </div>
          <div className="col-span-2 h-54 flex justify-center items-center relative">
            <img
              src={img1}
              className="w-full h-full object-cover"
              alt="Car 2"
            />
            <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">
              Accident Towing
            </h3>
          </div>
          <div className="col-span-2 h-54 flex justify-center items-center relative">
            <img
              src={img4}
              className="w-full h-full object-cover"
              alt="Car 3"
            />
            <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">
              On-Site Repair
            </h3>
          </div>
          <div className="h-54 flex flex-col justify-center items-center relative">
            <img
              src={img3}
              className="w-full h-full object-cover"
              alt="Car 4"
            />
            <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">
              Jump Starting
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-0 mb-12">
        <div className="flex space-x-0">
          <div className="flex-none flex flex-col items-center justify-center h-48 w-60 bg-black p-4 text-white relative">
            <img src={Clock} alt="Clock" className="h-15 w-15 mb-2" />
            <div className="text-sm font-bold">Less than 30 Min Arrival</div>
          </div>
          <div className="flex-none flex flex-col items-center justify-center h-48 w-62 bg-yellow-400 p-4 text-black relative">
            <img src={Call} alt="Call" className="h-10 w-10 mb-2" />
            <div className="text-sm font-bold">
              24/7 service ​Call (94) 77 002 2348
            </div>
          </div>
          <div className="flex-none flex flex-col items-center justify-center h-48 w-60 bg-gray-500 p-4 text-black relative">
            <img src={Dollar} alt="Dollar" className="h-10 w-10 mb-2" />
            <div className="text-sm font-bold">
              Affordable Rates for Quality Service
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
