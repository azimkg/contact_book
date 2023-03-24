import React, { useState } from "react";
import AllContacts from "../components/AllContacts";
import Details from "../components/Details";
import SideBar from "../components/SideBar";

const MainPage = () => {
  const [user, setUser] = useState("");
  return (
    <div className="container main_page">
      <div className="main_page-block">
        <SideBar />
        <Details user={user} />
        <AllContacts setUser={setUser} />
      </div>
    </div>
  );
};

export default MainPage;
