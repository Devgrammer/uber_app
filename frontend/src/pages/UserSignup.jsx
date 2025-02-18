import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {



  const [userSignupDetail, setUserSignupDetail] = useState({fullname:{firstname:'', lastname:''}, email:'', password:'', cpassword:''});
   const {user, setUser} = useContext(UserDataContext);

   const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newUser = userSignupDetail;
    delete newUser.cpassword;

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    if(response.status === 201){
      const data = response.data;
      setUser(data.user) 
      localStorage.setItem('token', data.token)
      navigate('/home');
    }


    setUserSignupDetail({
      fullname:{
      firstname: "",
      lastname: "",
      },
      email: "",
      password: "",
      cpassword: "",
    });

  }
  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div className="form-container">
        <div className="brand-logo">
          <img
            src="/images/brand logo/Uber_Logo_Black_RGB.svg"
            alt="uber"
            className="brand-icon w-32 ml-[-20px]"
          />
        </div>
        <form
          className="login-form font-umr space-y-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input-container">
            <p className="text-lg font-umm">First Name</p>
            <input
              value={userSignupDetail?.fullname?.firstname}
              type="text"
              placeholder="John"
              className="user-name w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setUserSignupDetail({
                  ...userSignupDetail,
                  fullname: {
                    firstname: e.target.value,
                    lastname: userSignupDetail.fullname.lastname,
                  },
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Last Name</p>
            <input
              value={userSignupDetail?.fullname?.lastname}
              type="text"
              placeholder="Doe"
              className="user-name w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setUserSignupDetail({
                  ...userSignupDetail,
                  fullname: {
                    firstname: userSignupDetail?.fullname?.firstname,
                    lastname: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Email</p>
            <input
              value={userSignupDetail?.email}
              type="text"
              placeholder="email@example.com"
              className="user-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setUserSignupDetail({
                  ...userSignupDetail,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Password</p>
            <input
              value={userSignupDetail?.password}
              type="password"
              required
              placeholder="***********"
              className="user-password w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              onChange={(e) =>
                setUserSignupDetail({
                  ...userSignupDetail,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">Confirm Password</p>
            <input
              value={userSignupDetail?.cpassword}
              type="password"
              required
              placeholder="***********"
              className="user-password w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              onChange={(e) =>
                setUserSignupDetail({
                  ...userSignupDetail,
                  cpassword: e.target.value,
                })
              }
            />
          </div>
          <button
            type="Submit"
            className="form-submit w-full h-12 rounded-lg  font-umb text-lg outline-1 bg-primary text-secondary"
          >
            Create an account
          </button>
          <p className="mt-[-0.5rem] font-umm text-md text-center">
            Already have an account?{" "}
            <Link to="/user/login" className="text-blue-600">
              Login.
            </Link>
          </p>
        </form>
        <p className="font-umr text-md text-gray-500 mt-4 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <a className="underline text-gray-700">Google Policy </a> and{" "}
          <a className="underline text-gray-700">Terms of Service</a>&nbsp;
          apply.
        </p>
      </div>
      <Link
        to="/captain/signup"
        className="sign-in flex items-center justify-center w-full h-12 rounded-lg  font-umb text-lg  bg-green-600 text-secondary"
      >
        Sign up as Captain
      </Link>
    </div>
  );
  
}

export default UserSignup