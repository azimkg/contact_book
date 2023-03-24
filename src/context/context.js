import React, { useReducer } from "react";
import axios from "axios";
import { API, CASE_EDIT_CONTACT, CASE_GET_CONTACT } from "../Api/API";

export const userContext = React.createContext();

const INIT_STATE = {
  users: [],
  editUser: null,
  contacts: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CONTACT:
      return {
        ...state,
        users: action.payload.data,
      };
    case CASE_EDIT_CONTACT:
      return { ...state, editUser: action.payload.data };

    case "GET_USERS":
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

const ContextUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllContacts() {
    let result = await axios(API + window.location.search);
    localStorage.setItem("users", JSON.stringify(result));
    dispatch({
      type: CASE_GET_CONTACT,
      payload: result,
    });
  }

  async function editedUser(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: CASE_EDIT_CONTACT,
      payload: res,
    });
  }

  async function editedOneUser(id, edited) {
    await axios.patch(`${API}/${id}/`, edited);
    getAllContacts();
  }

  // function getAllContactsLocal() {
  //   let contacts = JSON.parse(localStorage.getItem("users"));
  //   if (!contacts) {
  //     localStorage.setItem("users", JSON.stringify(contacts));
  //   }
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: contacts,
  //   });
  // }

  return (
    <userContext.Provider
      value={{
        editUser: state.editUser,
        users: state.users,
        contacts: state.contacts,
        // getAllContactsLocal,
        getAllContacts,
        editedUser,
        editedOneUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default ContextUserProvider;
