import React, { useContext, useEffect, useState } from "react";

import { userContext } from "../context/context";
import ChangeContact from "./details/ChangeContact";
import ContactInfo from "./details/ContactInfo";

const Details = ({ user }) => {
  const { users, getAllContacts } = useContext(userContext);
  const [isVisible, setIsVisible] = useState(null);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setIsVisible(user);
  }, [user]);

  return (
    <div className="details">
      <h3 className="details_title">Данные контакта {user}</h3>
      {isVisible ? (
        isModal ? (
          <ChangeContact setIsModal={setIsModal} />
        ) : (
          users?.map((item) =>
            item.id === user ? (
              <>
                <ContactInfo setIsModal={setIsModal} item={item} />
              </>
            ) : null
          )
        )
      ) : (
        <div className="details_none">
          <h3 className="details_title">Выберите контакт</h3>
        </div>
      )}
    </div>
  );
};

export default Details;
