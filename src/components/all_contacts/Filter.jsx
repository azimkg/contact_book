import React, { useContext, useEffect } from "react";
import { userContext } from "../../context/context";
import iconUser from "../../assets/user.svg";
import { Link } from "react-router-dom";

const Filter = ({ setUser }) => {
  const { users, getAllContacts } = useContext(userContext);
  useEffect(() => {
    getAllContacts();
  }, []);

  let filteredUsers = users?.sort(SortUsers);
  function SortUsers(x, y) {
    return x.name.localeCompare(y.name);
  }

  return (
    <div className="contacts">
      {filteredUsers?.map((item) => (
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
      {filteredUsers?.map((item) => (
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

export default Filter;
