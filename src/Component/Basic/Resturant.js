import React, { useEffect, useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setMenuList([
      ...new Set(
        Menu.map((curElem) => {
          return curElem.category;
        })
      ),
      "All",
    ]);
    setLoader(false);
  }, []);

  const filterItem = (category) => {
    setLoader(true);
    if (category === "All") {
      setMenuData(Menu);
      return setLoader(false);
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
    setLoader(false);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      {loader ? <h1>Loding....</h1> : <MenuCard menuData={menuData} />}
    </>
  );
};

export default Resturant;
