
import img from "/images/img/car.png";
import { FaSquare, FaWallet } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";



const Riding = ({driverName, plateNumber,desc, sourceAddress, destinationAddress, price}) => {
  return (
    <div className="fixed w-screen h-screen map-image">
        <Link to="/home" className="fixed flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer top-2 right-2 home-button">
        <GoHome/>
        </Link>
      <div className="h-1/2">
        <img
          src={"/images/img/map.jpg"}
          alt="uber"
          className="object-cover w-full h-full brand-icon "
        />
      </div>

      <div className="h-1/2">
        {/* VEHICLE IMAGE */}
        <div className="flex items-center justify-between h-40 vehicle">
          <div className="flex driver-image">
            <img
              src={img}
              alt=""
              className="w-16 h-16 rounded-full w- vehicle-img"
              width={100}
            />
            <img
              src={img}
              alt=""
              className="w-16 h-16 rounded-full vehicle-img"
              width={100}
            />
          </div>
          <div className="driver-detail">
            <div className="text-xl font-semibold uber-model-name">
              {driverName}
            </div>
            <div className="text-xl font-semibold uber-model-name">
              {plateNumber}
            </div>
            <div className="text-sm text-stone-700 vechical-description">
              {desc}
            </div>
          </div>
        </div>
        {/* VEHICLE DETAIL */}
        <div className="vehicle-details">
          <hr className="text-gray-300" />
          
          <hr className="text-gray-300" />
          {/* VEHICLE DESTINATION PLACE */}
          <div className="flex items-center h-20 p-8 detail-section gap-x-4">
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
          <div className="flex items-center h-20 p-8 detail-section gap-x-4">
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
          <button className="flex items-center justify-center w-full h-12 text-lg text-white bg-black rounded-lg sign-in font-umb">Make a Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
