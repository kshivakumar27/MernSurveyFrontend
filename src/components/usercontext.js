import React, { useState } from "react";
let UserContext = React.createContext();

export default UserContext;
export const UserProvider = ({ children }) => {
  let [userList, setUserlist] = useState([]);
  return (
    <UserContext.Provider value={{ userList, setUserlist }}>
      {children}
    </UserContext.Provider>
  );
};
