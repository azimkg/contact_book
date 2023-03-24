import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import iconSearch from "../assets/search.svg";
import { userContext } from "../context/context";
import Contacts from "./all_contacts/Contacts";
import Filter from "./all_contacts/Filter";

const AllContacts = ({ setUser }) => {
  const { getAllContacts } = useContext(userContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );
  // для выбора окна
  const [change, setChange] = useState(false);

  // Функции поиска
  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getAllContacts();
  }, [searchParams]);

  function handleChangeActive() {
    setChange(!change);
  }

  function handleSearchValue(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className="all_contacts">
      <h3 className="all_contacts-title">Контакты</h3>
      <div className="block_search">
        <img className="all_contacts-search" src={iconSearch} alt="search" />
        <input
          type="search"
          className="all_contacts-inp"
          placeholder="Найти контакт"
          value={searchValue}
          onChange={handleSearchValue}
        />
      </div>
      <div className="all_contacts-block">
        <div
          className={change ? "all_contacts-all" : "active"}
          onClick={handleChangeActive}
        >
          Все
        </div>
        <div
          className={change ? "active" : "all_contacts-all"}
          onClick={handleChangeActive}
        >
          Сортировка
        </div>
      </div>
      <div className="all_contacts-line"></div>
      {change ? (
        <Filter setUser={setUser} searchParams={searchParams} />
      ) : (
        <Contacts setUser={setUser} searchParams={searchParams} />
      )}
    </div>
  );
};

export default AllContacts;
