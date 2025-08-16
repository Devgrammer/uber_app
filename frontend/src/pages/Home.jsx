import UberLogo from "/images/brand logo/Uber_Logo_Black_RGB.svg";
import { GrLocationPin, GrLocation } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VechicleComponent from "../components/VechicleComponent";
import ConfirmRide from "../components/ConfirmRide";
import Car from "/images/img/car.png";
import Auto from "/images/img/auto.jpeg";
import Bike from "/images/img/bike.jpeg";
import WaitForRider from "../components/WaitingForDriver";
import LookingForADriver from "../components/LookingForADriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [lookingDriverPanelOpen, setLookingDriverPanelOpen] = useState(false);
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] =
    useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookingDriverPanelRef = useRef(null);
  const waitingForDriverPanelRef = useRef(null);

  //  const [coords, setCoords] = useState({
  //   lat:'',
  //   lng:''
  //  })
  // if(navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition((position)=>{
  //     const lat = position.coords.latitude;
  //     const lng = position.coords.longitude;
  //     const coordinates ={
  //       lat: lat,
  //       lng: lng
  //     }
  //     setCoords(coordinates)
  //   })}

  const submitHandler = () => {};

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "90%",
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
          padding: 12,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "10%",
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          translateY: "0%",
          opacity: 1,
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          translateY: "100%",
          opacity: 1,
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (waitingForDriverPanelOpen) {
        gsap.to(waitingForDriverPanelRef.current, {
          translateY: "0%",
          opacity: 1,
        });
      } else {
        gsap.to(waitingForDriverPanelRef.current, {
          translateY: "100%",
          opacity: 1,
        });
      }
    },
    [waitingForDriverPanelOpen]
  );

  /* LOOKING DRIVER PANEL */

  useGSAP(
    function () {
      if (lookingDriverPanelOpen) {
        gsap.to(lookingDriverPanelRef.current, {
          translateY: "0%",
          opacity: 1,
        });
      } else {
        gsap.to(lookingDriverPanelRef.current, {
          translateY: "100%",
          opacity: 1,
        });
      }
    },
    [lookingDriverPanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanelOpen) {
        gsap.to(confirmRidePanelRef.current, {
          translateY: "0%",
          opacity: 1,
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          translateY: "100%",
          opacity: 1,
        });
      }
    },
    [confirmRidePanelOpen]
  );

  //console.log('a:', pickup, destination)

  return (
    <div className="relative w-full h-screen overflow-hidden home-container">
      <div className="fixed w-screen h-screen map-image">
        <img
          src={"/images/img/map.jpg"}
          onClick={() => setPanelOpen(true)}
          alt="uber"
          className="object-cover w-full h-full brand-icon "
        />
      </div>

      <div className="absolute top-0 flex items-center justify-between w-full h-full p-6 home-header">
        <div className="brand-logo">
          <img
            src={UberLogo}
            alt="uber"
            className="brand-icon w-32 ml-[-20px]"
          />
        </div>
        <div>
          <FaUser />
        </div>
      </div>

      {/* LOCATION SEARCH PANEL */}
      <div className="absolute flex flex-col justify-end w-full h-screen -bottom-20 map-over-drawer rounded-xl z-3">
        <div className="bg-white h-96 form-container">
          <div className="flex items-center justify-between">
            <p className="mb-2 text-xl font-semibold">Find trips</p>
            <div
              ref={panelCloseRef}
              className="opacity-0 close-panel"
              onClick={() => setPanelOpen()}
            >
              <IoIosArrowDown size={"28"} />
            </div>
          </div>
          <div className="trips-container">
            <form className="space-y-6 " onSubmit={(e) => submitHandler(e)}>
              <div className="flex items-center w-full rounded-lg input-plus-icon-container bg-stone-200 outline-0 hover:outline-2 outline-yellow-500 ">
                <GrLocationPin
                  size={"28"}
                  className="flex justify-center w-14 "
                />
                <input
                  value={pickup}
                  type="text"
                  placeholder="Edd pick-up location"
                  onClick={() => setPanelOpen(true)}
                  onChange={(e) => setPickup(e.target.value)}
                  className="captain-email w-[80%] h-16 font-umm text-lg  rounded-r-lg  focus:outline-0 bg-stone-200"
                  required
                />
              </div>
              <div className="flex items-center w-full rounded-lg input-plus-icon-container bg-stone-200 outline-0 hover:outline-2 outline-yellow-500 ">
                <GrLocation size={"24"} className="flex justify-center w-16 " />
                <input
                  value={destination}
                  type="text"
                  placeholder="Enter your destination"
                  className="w-full h-16 pr-4 text-lg rounded-r-lg captain-email font-umm bg-stone-200 focus:outline-0"
                  onClick={() => setPanelOpen(true)}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div
          ref={panelRef}
          className="w-full h-0 p-6 bg-white opacity-0 slider"
        >
          <LocationSearchPanel
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      {/* VEHICLE SELECTION PANEL */}
      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0 flex flex-col justify-end w-full transform translate-y-100 h-fit z-3 map-over-drawer rounded-xl"
      >
        <div className="form-container  h-[35%] p-6 bg-white">
          <button
            className="absolute top-0 w-full bg-transparent h-14 scroll-down-btn"
            onClick={() => setVehiclePanelOpen(false)}
          ></button>
          <p className="mb-2 text-xl font-semibold">Choose your vehicle</p>
          <div
            className="absolute opacity-0 close-panel top-6 right-6"
            onClick={() => setVehiclePanelOpen(false)}
          >
            <IoIosArrowDown size={"28"} />
          </div>
          <div className="space-y-2 trips-container">
            <VechicleComponent
              img={Car}
              vehicleName={"Uber Go"}
              timeAway={"3"}
              timeReal={"15:32"}
              price={"1234"}
              desc={"Affordable and compact"}
              isSelected={true}
              setVehiclePanelOpen={setVehiclePanelOpen}
              setConfirmRidePanelOpen={setConfirmRidePanelOpen}
            />
            <VechicleComponent
              img={Auto}
              vehicleName={"Uber Auto"}
              timeAway={"3"}
              timeReal={"15:32"}
              price={"85"}
              desc={"Affordable and compact"}
              setVehiclePanelOpen={setVehiclePanelOpen}
              setConfirmRidePanelOpen={setConfirmRidePanelOpen}
            />
            <VechicleComponent
              img={Bike}
              vehicleName={"Uber Moto"}
              timeAway={"3"}
              timeReal={"15:32"}
              price={"35"}
              desc={"Affordable and compact"}
              setVehiclePanelOpen={setVehiclePanelOpen}
              setConfirmRidePanelOpen={setConfirmRidePanelOpen}
            />
          </div>
        </div>
      </div>
      {/*SELECTED VEHICLE DETAIL PANEL */}
      <div
        ref={confirmRidePanelRef}
        className="fixed bottom-0 flex flex-col justify-end w-full transform bg-red-700 translate-y-100 h-fit z-3 map-over-drawer rounded-xl"
      >
        <ConfirmRide
          img={Car}
          vehicleName={"Uber Go"}
          sourceAddress={"562/11-A"}
          destinationAddress={"Third Wave Coffee"}
          timeAway={"3"}
          timeReal={"15:32"}
          price={"1234"}
          desc={"Affordable and compact"}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setLookingDriverPanelOpen={setLookingDriverPanelOpen}
        />
      </div>
      {/*LOOKING FOR DRIVER PANEL */}
      <div
        ref={lookingDriverPanelRef}
        className="fixed bottom-0 flex flex-col justify-end w-full transform bg-red-700 translate-y-100 h-fit z-3 map-over-drawer rounded-xl"
      >
        <LookingForADriver
          img={Car}
          vehicleName={"Uber Go"}
          sourceAddress={"562/11-A"}
          destinationAddress={"Third Wave Coffee"}
          timeAway={"3"}
          timeReal={"15:32"}
          price={"1234"}
          desc={"Affordable and compact"}
          setLookingDriverPanelOpen={setLookingDriverPanelOpen}
        />
      </div>

      {/*WAITING FOR DRIVER PANEL */}
      <div
        ref={waitingForDriverPanelRef}
        className="fixed bottom-0 flex flex-col justify-end w-full transform bg-red-700 translate-y-100 h-fit z-3 map-over-drawer rounded-xl"
      >
        <WaitForRider
          img={Car}
          vehicleName={"Uber Go"}
          sourceAddress={"562/11-A"}
          destinationAddress={"Third Wave Coffee"}
          timeAway={"3"}
          timeReal={"15:32"}
          price={"1234"}
          desc={"Affordable and compact"}
          driverName={"Abhinav"}
          plateNumber={"UP73 1245"}
          setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen}
        />
      </div>
    </div>
    // <div className="hello">Hello</div>
  );
};

export default Home;
