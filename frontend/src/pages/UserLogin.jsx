import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [userLoginCred, setUserLoginCred] = useState({email:'', password:''});

  const {user, setUser} = useContext(UserDataContext);

  const navigate = useNavigate();



  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userLoginCred)
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate('/user/home');

    }

    setUserLoginCred({email:'', password:''})

  }
  return (
    <div className="flex flex-col justify-between h-screen p-8">
      <div className="form-container">
        <div className="brand-logo">
          <img
            value={userLoginCred?.email}
            src="/images/brand logo/Uber_Logo_Black_RGB.svg"
            alt="uber"
            className="brand-icon w-32 ml-[-20px]"
          />
        </div>
        <form className="space-y-6 login-form font-umr" onSubmit={(e)=>handleSubmit(e)}>
          <div className="input-container">
            <p className="text-lg font-umm">What is your email?</p>
            <input
              value={userLoginCred?.email}
              type="email"
              placeholder="email@example.com"
              className="w-full h-12 px-4 text-lg rounded-lg user-email font-umm bg-stone-200 focus:outline-2 outline-yellow-500"
              required
              onChange={(e) =>
                setUserLoginCred({ ...userLoginCred, email: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <p className="text-lg font-umm">What is your password?</p>
            <input
              value={userLoginCred?.password}
              type="password"
              required
              placeholder="***********"
              className="w-full h-12 px-4 text-lg rounded-lg user-password font-umm bg-stone-200 focus:outline-2 outline-yellow-500"
              onChange={(e) =>
                setUserLoginCred({ ...userLoginCred, password: e.target.value })
              }
            />
          </div>
          <button type='Submit' className="w-full h-12 text-lg rounded-lg form-submit font-umb outline-1 bg-primary text-secondary">
            Login
          </button>
          <p className="mt-[-0.5rem] font-umm text-md text-center">
            New here?{" "}
            <Link to="/user/signup" className="text-blue-600">
              Create an account.
            </Link>
          </p>
        </form>
      </div>
      <Link
        to="/captain/login"
        className="flex items-center justify-center w-full h-12 text-lg bg-green-600 rounded-lg sign-in font-umb text-secondary"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
