import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';



const CaptainProtectedWrapper = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {captain, setCaptain, isLoading, setIsLoading, setIsError} = useContext(CaptainDataContext)
  


    useEffect(()=>{
        if (!token) {
          navigate("/captain/login"); 
        }
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers:{
        authorization: `Bearer ${token}`
      }
    }).then((response)=>{
      if(response.status === 200){
        setCaptain(response.data.captain);
        setIsLoading(false);

      }

    })
    .catch((err)=>{
      console.log(err);
      setIsError(err)
      localStorage.removeItem('token')
      navigate('/captain/login')
    })


    if(isLoading){
      return (
        <div>Loading...</div>
      )
    }

  
  return <>{children}</>
  
};

export default CaptainProtectedWrapper