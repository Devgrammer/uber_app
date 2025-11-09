import img from "/images/img/man.avif";
import { FaSquare, FaWallet } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import UberLogo from "/images/brand logo/Uber_Logo_Black_RGB.svg";
import { BsSpeedometer2 } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
 
const CaptainHome = ({
  driverName,
  plateNumber,
  desc,
  sourceAddress,
  destinationAddress,
  price,
}) => {
  driverName = "Dinesh Kumar"
  plateNumber="MH1274"
  price=225
  
  return (
    <div className="fixed w-screen h-screen map-image">
      <div className="h-1/2">
        {/* MAP TRACKER HALF */}
        <div className="fixed flex items-center justify-between px-4 bg-transparent captain-home-header">
          <div className="brand-image">
            <img
              src={UberLogo}
              alt="uber"
              className="brand-icon w-32 ml-[-20px]"
            />
          </div>
          <Link
            to="/home"
            className="fixed flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer top-2 right-2 home-button"
          >
            <GoHome />
          </Link>
        </div>
        <img
          src={"/images/img/map.jpg"}
          alt="uber"
          className="object-cover w-full h-full brand-icon "
        />
      </div>
      {/* DETAIL HALF */}
      <div className="p-4 h-1/2">
        <div className="flex items-center justify-between driver-detail">
          {/* VEHICLE IMAGE */}
          <div className="flex items-center justify-start h-40 px-4 space-x-4 vehicle">
            <div className="flex driver-image">
              <img
                src={img}
                alt=""
                className="w-16 h-16 rounded-full w- vehicle-img"
                width={100}
              />
            </div>
            <div className="driver-detail">
              <div className="text-3xl font-medium">{driverName}</div>
              <div className="text-lg text-stone-700 uber-model-name">
                {plateNumber}
              </div>
              <div className="text-sm text-stone-700 vechical-description">
                {desc}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start h-40 px-4 space-x-4 vehicle">
            <div className="driver-detail">
              <div className="text-3xl text- ame">{price}</div>
              <div className="text-sm text-stone-700 vechical-description">
                {desc}
              </div>
            </div>
          </div>
        </div>
        {/* VEHICLE DETAIL */}
        <div className="flex items-center justify-between h-40 p-12 rounded-xl vehicle-details bg-amber-500">
          {/* HOURS ONLINE */}
          <div className="flex-col items-center h-20 space-y-2 text-center detail-section">
            <div className="flex justify-center text-3xl detail-icon">
              <CiClock2 />
            </div>
            <div className="detail-content">
              <div className="text-xl font-semibold uber-model-name">{20}</div>
              <div className="text-sm text-stone-700 vechical-description">
                {"HOURS ONLINE"}
              </div>
            </div>
          </div>
          {/* TOTAL DISTANCE */}
          <div className="flex-col items-center h-20 space-y-2 text-center detail-section">
            <div className="flex justify-center text-3xl detail-icon">
              <BsSpeedometer2 />
            </div>
            <div className="detail-content">
              <div className="text-xl font-semibold uber-model-name">{100}</div>
              <div className="text-sm text-stone-700 vechical-description">
                {"TOTAL DISTANCE"}
              </div>
            </div>
          </div>
          {/* EARNED */}
          <div className="flex-col items-center h-20 space-y-2 text-center detail-section">
            <div className="flex justify-center text-3xl detail-icon">
              <CgNotes />
            </div>
            <div className="detail-content">
              <div className="text-xl font-semibold uber-model-name">
                ₹ {300}
              </div>
              <div className="text-sm text-stone-700 vechical-description">
                {"EARNED"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
