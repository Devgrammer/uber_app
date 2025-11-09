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
       navigate("/captain/home");
     }
    setcaptainLoginCred({email:'', password:''})

  }
  return (
    <div className="flex flex-col justify-between h-screen p-8">
      <div className="form-container">
        <div className="brand-logo">
          <img
            src="/images/brand logo/uber_driver.svg"
            alt="uber"
            className="brand-icon w-24 ml-[-6px]"
          />
        </div>
        <form className="space-y-6 login-form font-umr" onSubmit={(e)=>handleSubmit(e)}>
          <div className="input-container">
            <p className="text-lg font-umm">What is your email?</p>
            <input
              value={captainLoginCred?.email}
              type="email"
              placeholder="email@example.com"
              className="w-full h-12 px-4 text-lg rounded-lg captain-email font-umm bg-stone-200 focus:outline-2 outline-yellow-500"
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
              className="w-full h-12 px-4 text-lg rounded-lg captain-password font-umm bg-stone-200 focus:outline-2 outline-yellow-500"
              onChange={(e) =>
                setcaptainLoginCred({ ...captainLoginCred, password: e.target.value })
              }
            />
          </div>
          <button type='Submit' className="w-full h-12 text-lg rounded-lg form-submit font-umb outline-1 bg-primary text-secondary">
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
        className="flex items-center justify-center w-full h-12 text-lg bg-green-600 rounded-lg sign-in font-umb text-secondary"
      >
        Sign in as User
      </Link>
    </div>
  );
  
}

export default CaptainLogin