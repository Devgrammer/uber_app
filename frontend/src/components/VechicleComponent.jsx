
import { FaUser } from 'react-icons/fa';

const VechicleComponent = ({img, vehicleName, capacity, timeAway, timeReal, desc, price, isSelected, setConfirmRidePanelOpen, setVehiclePanelOpen}) => {
  return (
    <div
      className={`flex items-center  justify-between w-full h-24 border p-2  border-gray-300 active:border-3 active:border-black rounded-lg  vehicle-type-container ${
        isSelected ? "border" : ""
      }`}
      onClick={()=>{setConfirmRidePanelOpen(true); }}
    >
      {/* VEHICLE IMAGE */}
      <div className="w-32 vehicle">
        <img src={img} alt="" className="vehicle-img" width={72} />
      </div>
      {/* VEHICLE DETAIL */}
      <div className="w-full mr-4 vehicle-detail">
        <div className="flex items-end justify-between w-full uber-model">
          <div className="flex items-center space-x-4 vehicle-name-capacity">
            <div className="text-xl font-semibold uber-model-name">
              {vehicleName}
            </div>
            <div className="flex items-center space-x-0.5 uber-model-name">
              <FaUser size={14} />
              <span className="cab-capacity">{capacity}</span>
            </div>
          </div>
          {/* PRICE */}
          <div className="text-xl font-bold vehicle-ride-price">₹{price}</div>
        </div>
        <div className="flex font-semibold uber-time">
          <p className="time-span">{timeAway} mins away</p>
          <p>•</p>
          <p className="time">{timeReal}</p>
        </div>
        <div className="text-sm text-stone-700 vechical-description">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default VechicleComponent