import React, { createContext, useState, useContext } from 'react';
import Navbar from './component/nav';
import './App.css';
import Home from './component/screens/home';
import Login from './component/screens/login';
import Profile from './component/screens/profile';
import Signup from './component/screens/signup';
import CreatePost from './component/screens/createPost';
import OtherDet from './component/screens/userProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Context
export const UserContext = createContext();

const Routing = () => {
  const { state } = useContext(UserContext);

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/profile/:userId" element={<OtherDet />} /> */}
    </Routes>
  );
};

function App() {
  const [state, setState] = useState(null);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
