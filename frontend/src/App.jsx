import { Routes, Route } from "react-router";
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import './App.css'
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";

function App() { 
  return ( 
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<UserProtectedWrapper>  <Home/></UserProtectedWrapper>}/>
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/captain/login" element={<CaptainLogin />} />
        <Route path="/captain/signup" element={<CaptainSignup />} />
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>} />
        <Route path="/captain/logout" element={<CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>} />

      </Routes>
  );
}

export default App
