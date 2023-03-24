import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/context";
import iconUser from "../../assets/user.svg";
import { Link, useNavigate } from "react-router-dom";

const Contacts = ({ setUser }) => {
  const { users, getAllContacts } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="contacts">
      {users?.map((item) => (
        <div
          onClick={() => setUser(item.id)}
          key={item.id}
          className="contacts_card"
        >
          <div className="contacts_card-block">
            <img src={iconUser} className="contacts_card-img" alt="icon user" />
            <h4 className="contacts_card-name">{item.name}</h4>
          </div>

          <p className="contacts_card-phone">{item.phone}</p>
        </div>
      ))}
      {users?.map((item) => (
        <Link
          to={`/info/${item.id}`}
          key={item.id}
          className="contacts_card-mobile"
        >
          <div className="contacts_card-block">
            <img src={iconUser} className="contacts_card-img" alt="icon user" />
            <h4 className="contacts_card-name">{item.name}</h4>
          </div>
          <p className="contacts_card-phone">{item.phone}</p>
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
