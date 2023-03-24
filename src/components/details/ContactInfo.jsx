import React from "react";
import iconUser from "../../assets/user.svg";
import phone from "../../assets/phone.svg";
import comp from "../../assets/comp.svg";
import email from "../../assets/email.svg";
import loc from "../../assets/street.svg";
import city from "../../assets/city.svg";
import he from "../../assets/name.svg";
import link from "../../assets/link.svg";
import { useNavigate } from "react-router-dom";

const ContactInfo = ({ item, setIsModal }) => {
  const navigate = useNavigate();
  function openTheChangeModal(id) {
    setIsModal(true);
    navigate(`/${id}`);
  }
  function openTheChangeModalMobile(id) {
    setIsModal(true);
    navigate(`/info/${id}`);
  }
  return (
    <div className="details_card">
      <img className="details_card-img" src={iconUser} alt="user" />
      <div className="details_card-block">
        <div className="details_card-block_section">
          <p className="details_card-block_label">ФИО</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={he} alt="he" />
            <h4 className="details_card-block_text">{item.name}</h4>
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Email</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={email} alt="email" />
            <h4 className="details_card-block_text">{item.email}</h4>
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Адресс</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={loc} alt="street" />
            <h4 className="details_card-block_text">
              {item.address.street} {item.address.suite}
            </h4>
          </div>
          <div className="details_card-svg_block">
            <img className="svg_img" src={city} alt="city" />
            <h4 className="details_card-block_text">{item.address.city}</h4>
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Номер телефона</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={phone} alt="phone" />
            <h4 className="details_card-block_text">{item.phone}</h4>
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Компания</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={comp} alt="company" />
            <h4 className="details_card-block_text">{item.company.title}</h4>
          </div>
        </div>
        <div className="details_card-block_section">
          <p className="details_card-block_label">Сайт</p>
          <div className="details_card-svg_block">
            <img className="svg_img" src={link} alt="link" />
            <h4 className="details_card-block_text">{item.website}</h4>
          </div>
        </div>
      </div>
      <p className="details_change" onClick={() => openTheChangeModal(item.id)}>
        Изменить
      </p>
      <p
        className="details_change-mobile"
        onClick={() => openTheChangeModalMobile(item.id)}
      >
        Изменить
      </p>
    </div>
  );
};

export default ContactInfo;
