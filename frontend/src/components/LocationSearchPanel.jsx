import React from 'react'
import { TiLocationArrow } from "react-icons/ti";
import { Link } from 'react-router-dom';

const LocationSearchPanel = ({vehiclePanelOpen, setVehiclePanelOpen, setPanelOpen}) => {
  const location = [
    "Near Cosmic Plaza, Rajori, New Delh",
    "Near Cosmic Plaza, Rajori, New Delh",
    "Near Cosmic Plaza, Rajori, New Delh",
    "Near Cosmic Plaza, Rajori, New Delh",
    "Near Cosmic Plaza, Rajori, New Delh",
    "Near Cosmic Plaza, Rajori, New Delh",
  ];
  return (
    <>
    {
      location.map((address, index)=>{
        return (
          <>
            <div key={`location-${index}`} className={"my-4"} onClick={()=>{setVehiclePanelOpen(true); setPanelOpen(false)}}>
              <div className="flex items-center h-20 p-2 border-2 border-white rounded-lg active:border-black gap-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full location-icon">
                  <TiLocationArrow size={30} />
                </div>
                <div>
                  <div>
                    <h4 className="font-semibold">
                      Near Cosmic Plaza, Rajori, New Delhi
                    </h4>
                    <h4 className="text-sm">
                      Near Cosmic Plaza, Rajori, New Delhi
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })
    }
 
    </>
  );
}

export default LocationSearchPanel