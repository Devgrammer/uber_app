
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    if(!token){
        navigate('/user/login');
    }

  return (
    <>{children}</>
  )
}

export default UserProtectedWrapper