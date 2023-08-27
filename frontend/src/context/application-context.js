import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({
  sideBar: "",
  updateSideBar: () => {},
});

const AppContextProvider = (props) => {
  const [sideBar, setSideBar] = useState(true);
  const [user, setUser] = useState();
  const [productsData, setProductsData] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  const navigate = useNavigate();

  // user authentication
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  const updateSideBar = () => {
    setSideBar(!sideBar);
  };

  // context store initialization

  const store = {
    sideBar,
    updateSideBar,
    user,
    setUser,
    productsData,
    setProductsData,
    fetchAgain,
    setFetchAgain,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
