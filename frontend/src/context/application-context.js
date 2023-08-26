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

  const navigate = useNavigate();

  // user authentication
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  // fetching products data
  useEffect(() => {
    setProductsData([
      {
        ID: 1,
        Title: "A Book",
        Image: "",
        Price: 500,
        Description: "A book is awesome!",
        Quantity: 1500,
        Action: "1",
      },
      {
        ID: 2,
        Title: "B Book",
        Price: 600,
        Description: "B book is awesome!",
        Quantity: 1500,
        Action: "2",
      },
      {
        ID: 3,
        Title: "C Book",
        Price: 700,
        Description: "C book is awesome!",
        Quantity: 1500,
        Action: "3",
      },
    ]);
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
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
