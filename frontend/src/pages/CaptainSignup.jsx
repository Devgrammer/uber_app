import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  const [captainSignupDetail, setcaptainSignupDetail] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    cpassword: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType:"car",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    delete captainSignupDetail.cpassword;
    // captainSignupDetail.vehicle={
    //   color:'red',
    //   plate:'XDR',
    //   capacity:"0",
    //   vehicleType:'car'
    // }

    console.log('check', captainSignupDetail)

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainSignupDetail);

    if(response.status === 201){
      const data = response.data;
      setUser(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/home')
    }
    setcaptainSignupDetail({
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div className="form-container">
        <div className="brand-logo">
          <img
            src="/images/brand logo/uber_driver.svg"
            alt="uber"
            className="brand-icon w-24 ml-[-6px]"
          />
        </div>
        <form
          className="login-form font-umr space-y-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input-container">
            <p className="text-lg font-umm">First Name</p>
            <input
              value={captainSignupDetail?.firstname}
              type="text"
              placeholder="John"
              className="captain-name w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setcaptainSignupDetail({
                  ...captainSignupDetail,
                  fullname: {
                    firstname: e.target.value,
                    lastname: captainSignupDetail.fullname.lastname,
                  },
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Last Name</p>
            <input
              value={captainSignupDetail?.lastname}
              type="text"
              placeholder="Doe"
              className="captain-name w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setcaptainSignupDetail({
                  ...captainSignupDetail,
                  fullname: {
                    firstname: captainSignupDetail.fullname.firstname,
                    lastname: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Email</p>
            <input
              value={captainSignupDetail?.email}
              type="text"
              placeholder="email@example.com"
              className="captain-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setcaptainSignupDetail({
                  ...captainSignupDetail,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container-outer w-full">
            <p className="text-lg font-umm">Vehicle</p>
            <div className="division-wrapper w-full grid grid-cols-2  gap-2 md:gap-8">
              <div className="input-container w-full">
                <input
                  value={captainSignupDetail?.vehicle?.color}
                  type="text"
                  placeholder="Vehicle Color"
                  className="captain-email w-full  h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
                  required
                  onChange={(e) =>
                    setcaptainSignupDetail({
                      ...captainSignupDetail,
                      vehicle: {
                        ...captainSignupDetail.vehicle,
                        color: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input-container w-full ">
                <input
                  value={captainSignupDetail?.vehicle?.plate}
                  type="text"
                  placeholder="Vehicle Plate"
                  className="captain-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
                  required
                  autoCapitalize={"on"}
                  maxLength={10}
                  minLength={6}
                  onChange={(e) =>
                    setcaptainSignupDetail({
                      ...captainSignupDetail,
                      vehicle: {
                        ...captainSignupDetail.vehicle,
                        plate: e.target.value?.toUpperCase(),
                      },
                    })
                  }
                />
              </div>
              <div className="input-container w-full ">
                <input
                  value={captainSignupDetail?.vehicle?.capacity}
                  type="number"
                  placeholder="Vehicle Capacity"
                  className="captain-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
                  required
                  onChange={(e) =>
                    setcaptainSignupDetail({
                      ...captainSignupDetail,
                      vehicle: {
                        ...captainSignupDetail.vehicle,
                        capacity: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input-container w-full ">
                <select
                  className="captain-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
                  placeholder="Vehicle Type"
                  required
                  onChange={(e) =>
                    setcaptainSignupDetail({
                      ...captainSignupDetail,
                      vehicle: {
                        ...captainSignupDetail.vehicle,
                        vehicleType: e.target.value,
                      },
                    })
                  }
                >
                  <option  value=" ">
                    Vehicle Type
                  </option>
                  <option value="car" name="Car">
                    Car
                  </option>
                  <option value="motorcycle" name="MotorCycle">
                    MotoCycle
                  </option>
                  <option value="auto" name="auto">
                    Auto
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Password</p>
            <input
              value={captainSignupDetail?.password}
              type="password"
              required
              placeholder="***********"
              className="captain-password w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              onChange={(e) =>
                setcaptainSignupDetail({
                  ...captainSignupDetail,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Confirm Password</p>
            <input
              value={captainSignupDetail?.cpassword}
              type="password"
              required
              placeholder="***********"
              className="captain-password w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              onChange={(e) =>
                setcaptainSignupDetail({
                  ...captainSignupDetail,
                  cpassword: e.target.value,
                })
              }
            />
          </div>

          <button
            type="Submit"
            className="form-submit w-full h-12 rounded-lg  font-umb text-lg outline-1 bg-primary text-secondary"
          >
            Signup
          </button>
          <p className="mt-[-0.5rem] font-umm text-md text-center">
            Already have an account?{" "}
            <Link to="/captain/login" className="text-blue-600">
              Login.
            </Link>
          </p>
        </form>
        <p className="font-umr text-md text-gray-500 mt-4 leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
      <Link
        to="/user/signup"
        className="sign-in flex items-center justify-center w-full h-12 rounded-lg  font-umb text-lg  bg-green-600 text-secondary"
      >
        Sign up as User
      </Link>
    </div>
  ); 
}

export default CaptainSignup