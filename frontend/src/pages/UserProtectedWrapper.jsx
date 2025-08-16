
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {UserDataContext} from '../context/UserContext';

const UserProtectedWrapper = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const {user, setUser, isLoading, setIsLoading, error , setError} = useContext(UserDataContext);

    useEffect(()=>{
      if(!token){
          navigate('/user/login')
      }
    },[token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
      headers:{
        authorization: `Bearer ${token}`
      }
    }).then((response)=>{
      if(response.status === 200){
        setUser(response?.data?.user);
        setIsLoading(false)
      }
    }).catch((err)=>{
      console.log(err);
      setError(err);
      localStorage.removeItem('token');
      //navigate('/user/login')
    })
  return (
    <>{children}</>
  )
}

export default UserProtectedWrapper