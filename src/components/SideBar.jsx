import React from "react";
import contacts from "../assets/contacts.svg";
import search from "../assets/searchCop.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar_title">Контактная книга</h2>
      <ul className="sidebar_block">
        <li className="sidebar_block-list">
          <img className="sidebar_block-svg" src={contacts} alt="contacts" />{" "}
          Контакты
        </li>
        <li className="sidebar_block-list">
          <img className="sidebar_block-svg" src={search} alt="search" /> Поиск
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
