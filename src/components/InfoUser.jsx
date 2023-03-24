import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { userContext } from "../context/context";
import ChangeContact from "./details/ChangeContact";
import ContactInfo from "./details/ContactInfo";

const Details = ({ user }) => {
  const { users } = useContext(userContext);
  const [isVisible, setIsVisible] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const { pathname } = useLocation();
  let path = pathname?.split("").slice(6, 7).join("");

  useEffect(() => {
    setIsVisible(path);
  }, [path]);

  return (
    <div className="container infoUser">
      <h3 className="details_title">Данные контакта {user}</h3>
      {isVisible ? (
        isModal ? (
          <ChangeContact setIsModal={setIsModal} />
        ) : (
          users?.map((item) =>
            item.id == path ? (
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
