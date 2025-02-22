import { createContext, useState } from "react"

export const UserDataContext = createContext('');

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            LastName:''
        }
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const value= {
      user, setUser, isLoading, setIsLoading, error, setError
    }

  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
}

export default UserContext