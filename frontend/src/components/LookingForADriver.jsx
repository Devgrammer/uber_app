
import { FaSquare, FaWallet } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";
const LookingForADriver = ({
  img,
  vehicleName,
  sourceAddress,
  destinationAddress,
  timeAway,
  timeReal,
  price,
  desc,
  setLookingDriverPanelOpen
}) => {
  return (
    <div className="w-full  min-h-[45rem] p-6vehicle-detail-panel bg-white">
      <button
        onClick={() => setLookingDriverPanelOpen(false)}
        className="absolute top-0 w-full bg-transparent h-14 scroll-down-btn"
      ></button>
      <p className="px-2 py-4 text-xl font-semibold">Looking for a Driver</p>
      <div className="absolute opacity-0 close-panel top-6 right-6">
        <IoIosArrowDown size={"28"} />
      </div>
      <hr className="text-gray-300" />
      {/* VEHICLE IMAGE */}
      <div className="flex justify-center vehicle">
        <img src={img} alt="" className="vehicle-img" width={280} />
      </div>
      {/* VEHICLE DETAIL */}
      <div className="vehicle-details">
        <hr className="text-gray-300" />
        {/* VEHICLE ORIGIN PLACE */}
        <div className="detail-section flex h-20 p-8  items-center gap-x-4">
          <div className="detail-icon">
            <FaLocationDot />
          </div>
          <div className="detail-content">
            <div className="text-xl font-semibold uber-model-name">
              {sourceAddress}
            </div>
            <div className="text-sm text-stone-700 vechical-description">
              {desc}
            </div>
          </div>
        </div>
        <hr className="text-gray-300" />
        {/* VEHICLE DESTINATION PLACE */}
        <div className="detail-section flex items-center h-20 p-8 gap-x-4">
          <div className="detail-icon">
            <FaSquare />
          </div>
          <div className="detail-content">
            <div className="text-xl font-semibold uber-model-name">
              {destinationAddress}
            </div>
            <div className="text-sm text-stone-700 vechical-description">
              {desc}
            </div>
          </div>
        </div>
        <hr className="text-gray-300" />
        {/* RIDE CHARGES */}
        <div className="detail-section flex h-20 p-8 items-center gap-x-4">
          <div className="detail-icon">
            <FaWallet />
          </div>
          <div className="detail-content">
            <div className="text-xl font-semibold uber-model-name">
              ₹ {price}
            </div>
            <div className="text-sm text-stone-700 vechical-description">
              {desc}
            </div>
          </div>
        </div>
        <hr className="text-gray-300" />
      </div>
    </div>
  );
};

export default LookingForADriver