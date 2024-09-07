import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-20">
      <div className="grid grid-cols-4 gap-0 max-w-screen-lg w-full ml-60"> {/* Adjust ml-60 to move right */}
        <div className="h-54 flex flex-col justify-center items-center relative">
          <img src={img2} className="w-full h-full object-cover" alt="Car 1" />
          <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">Tire Change</h3>
        </div>
        <div className="col-span-2 h-54 flex justify-center items-center relative">
          <img src={img1} className="w-full h-full object-cover" alt="Car 2" />
          <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">Accident Towing</h3> {/* Updated text for img1 */}
        </div>
        <div className="col-span-2 h-54 flex justify-center items-center relative">
          <img src={img4} className="w-full h-full object-cover" alt="Car 3" />
          <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">On-Site Repaire</h3> {/* Updated text for img4 */}
        </div>
        <div className="h-54 flex flex-col justify-center items-center relative">
          <img src={img3} className="w-full h-full object-cover" alt="Car 4" />
          <h3 className="absolute bottom-0 left-0 p-2 text-white font-bold">JUmp Starting</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
