import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [userLoginCred, setUserLoginCred] = useState({email:'', password:''});

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(userLoginCred.email, userLoginCred.password);

    setUserLoginCred({email:'', password:''})

  }
  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div className="form-container">
        <div className="brand-logo">
          <img
            value={userLoginCred?.email}
            src="/images/brand logo/Uber_Logo_Black_RGB.svg"
            alt="uber"
            className="brand-icon w-32 ml-[-20px]"
          />
        </div>
        <form className="login-form font-umr space-y-6" onSubmit={(e)=>handleSubmit(e)}>
          <div className="input-container">
            <p className="text-lg font-umm">What is your email?</p>
            <input
              value={userLoginCred?.email}
              type="email"
              placeholder="email@example.com"
              className="user-email w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
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
              className="user-password w-full h-12 font-umm text-lg rounded-lg  bg-stone-200 focus:outline-2 outline-yellow-500 px-4"
              onChange={(e) =>
                setUserLoginCred({ ...userLoginCred, password: e.target.value })
              }
            />
          </div>
          <button type='Submit' className="form-submit w-full h-12 rounded-lg  font-umb text-lg outline-1 bg-primary text-secondary">
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
        className="sign-in flex items-center justify-center w-full h-12 rounded-lg  font-umb text-lg  bg-green-600 text-secondary"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
