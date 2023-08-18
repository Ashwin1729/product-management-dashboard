import React, { createContext, useState } from "react";

export const AppContext = createContext({
  sideBar: "",
  updateSideBar: () => {},
});

const AppContextProvider = (props) => {
  const [sideBar, setSideBar] = useState(true);

  const updateSideBar = () => {
    setSideBar(!sideBar);
  };

  // context store initialization

  const store = {
    sideBar,
    updateSideBar,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
