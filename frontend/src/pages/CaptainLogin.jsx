import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";


const CaptainLogin = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  const [captainLoginCred, setcaptainLoginCred] = useState({email:'', password:''});
  const handleSubmit = async (e)=>{
    e.preventDefault();
     const response = await axios.post(
       `${import.meta.env.VITE_BASE_URL}/captains/login`,
       captainLoginCred
     );
     if (response.status === 200) {
       const data = response.data;
       setUser(data.captain);
       localStorage.setItem("token", data.token);
       navigate("/home");
     }
    setcaptainLoginCred({email:'', password:''})

  }
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
        <form className="login-form font-umr space-y-6" onSubmit={(e)=>handleSubmit(e)}>
          <div className="input-container">
            <p className="text-lg font-umm">What is your email?</p>
            <input
              value={captainLoginCred?.email}
              type="email"
              placeholder="email@example.com"
              className="captain-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              required
              onChange={(e) =>
                setcaptainLoginCred({ ...captainLoginCred, email: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">What is your password?</p>
            <input
              value={captainLoginCred?.password}
              type="password"
              required
              placeholder="***********"
              className="captain-password w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              onChange={(e) =>
                setcaptainLoginCred({ ...captainLoginCred, password: e.target.value })
              }
            />
          </div>
          <button type='Submit' className="form-submit w-full h-12 rounded-lg  font-umb text-lg outline-1 bg-primary text-secondary">
            Login
          </button>
          <p className="mt-[-0.5rem] font-umm text-md text-center">
            New here?{" "}
            <Link to="/captain/signup" className="text-blue-600">
              Register as Captain.
            </Link>
          </p>
        </form>
      </div>
      <Link
        to="/user/login"
        className="sign-in flex items-center justify-center w-full h-12 rounded-lg  font-umb text-lg  bg-green-600 text-secondary"
      >
        Sign in as User
      </Link>
    </div>
  );
  
}

export default CaptainLogin