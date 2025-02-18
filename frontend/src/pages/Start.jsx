import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Start = () => {
  return (
    <div className="home-main-container flex box-border bg-[url(/images/img/home_og.jpg)] items-end  w-full h-screen bg-center bg-no-repeat bg-cover">
      <div className="home-inner-sub-container w-full h-[20%] rounded-t-3xl  bg-secondary p-4 space-y-8">
        <div className="get-started-heading font-umb text-3xl mx-1">
          Get Started with Uber!
        </div>
        <Link  to='/user/login' className="continue-to-login-btn w-full h-16 rounded-md bg-primary text-secondary font-umb flex  items-center justify-between p-4">
          <span className="float-center text-2xl ml-[35%] ">Continue</span> <RiArrowRightLine className="flex justify-end" size={32}/>
        </Link>
      </div>
    </div>
  );
};

export default Start;
