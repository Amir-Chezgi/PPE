import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pagefirst from "./components/projectManagment/Pagefirst";
// import { ipcRenderer } from "electron";
// import PrimarySearchAppBar from "./components/projectManagment/ProjManagment";

import { HashRouter, Route, Routes, Navigate, Switch } from "react-router-dom";
import Dailyreport from "./components/projectManagment/Dailyreport";

export default function App() {
  const title = "Hello ";
  const enhancedTitle = title + "world";

  const showNotify = () => {
    electron.notificationApi.sendNotification("this is new amir yess ");
  };

  return (
    <HashRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Projectmanagement" exact element={<Dailyreport />} />

        {/* <Navbar></Navbar> */}
        {/* <Home></Home> */}
      </Routes>
    </HashRouter>

    // <>
    //   {/* <h1>{enhancedTitle}</h1>
    //   <Pagefirst /> */}
    //   {/* <button onClick={showNotify}>send notification</button> */}
    // </>
  );
}
