import React, { useContext, useEffect, useState } from "react";
import iconUser from "../../assets/user.svg";
import comp from "../../assets/comp.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import loc from "../../assets/street.svg";
import city from "../../assets/city.svg";
import he from "../../assets/name.svg";
import link from "../../assets/link.svg";
import { userContext } from "../../context/context";
import { useNavigate, useParams } from "react-router-dom";

const ChangeContact = ({ setIsModal }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { editedUser, editedOneUser, editUser } = useContext(userContext);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    editedUser(params.id);
  }, []);

  useEffect(() => {
    setEdit(editUser);
  }, [editUser]);

  function handleValue(e) {
    let newWatch = { ...edit, [e.target.name]: e.target.value };
    setEdit(newWatch);
  }

  function saveUser() {
    console.log(edit);
    editedOneUser(edit.id, edit);
    setIsModal(false);
    navigate("/");
  }
  return edit ? (
    <div className="details_card">
      <img className="details_card-img" src={iconUser} alt="user" />
      <div className="details_card-block">
        <div className="details_card-block_section">
          <p className="details_card-block_label">ФИО</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={he} alt="he" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.name}
              name="name"
              onChange={handleValue}
            />
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Email</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={email} alt="email" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.email}
              name="email"
              onChange={handleValue}
            />
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Адресс</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={loc} alt="street" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.address.street}
              name="street"
              onChange={handleValue}
            />
          </div>
          <div className="details_card-svg_block">
            <img className="svg_img" src={city} alt="city" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.address.city}
              name="city"
              onChange={handleValue}
            />
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Номер телефона</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={phone} alt="phone" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.phone}
              name="phone"
              onChange={handleValue}
            />
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Компания</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={comp} alt="company" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.company.title}
              name="title"
              onChange={handleValue}
            />
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Сайт</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={link} alt="link" />
            <input
              className="details_change-inp"
              type="text"
              placeholder=""
              value={edit.website}
              name="website"
              onChange={handleValue}
            />
          </div>
        </div>
      </div>
      <p className="details_change" onClick={saveUser}>
        Сохранить
      </p>
      <p className="details_change-mobile" onClick={saveUser}>
        Сохранить
      </p>
    </div>
  ) : (
    <div className="details_none">
      <h3 className="details_title">Идет загрузка...</h3>
    </div>
  );
};

export default ChangeContact;
