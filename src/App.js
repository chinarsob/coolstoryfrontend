import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SpaceDetailsPage from "./pages/SpaceDetail/SpaceDetailsPage";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import MySpace from "./pages/SpaceDetail/MySpace";
import HomePage from "./pages/HomePage/HomePage";
import CreateStories from "./pages/SpaceDetail/CreateStories";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path="/myspace" element ={<MySpace/>}/>
        <Route path='/space/:id' element={<SpaceDetailsPage />} />
        <Route path='/createstories'element={<CreateStories/>}/>
      </Routes>
    </div>
  );
}

export default App;
