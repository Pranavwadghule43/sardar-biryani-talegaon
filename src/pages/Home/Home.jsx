import React, { useState } from "react";
<<<<<<< HEAD
=======
import "./Home.css";
>>>>>>> ec83d5c762d12d0603d216d876a41298354cffb4
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import FoodMenu from "../../components/FoodMenu/FoodMenu";
import MenuCard from "../../components/MenuCard/MenuCard";
import Awards from "../../components/Awards/Awards";
<<<<<<< HEAD
import Guests from "../../components/Guests/Guests";
=======
>>>>>>> ec83d5c762d12d0603d216d876a41298354cffb4

const Home = () => {
  // Menu Sorting
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodMenu category={category} />
      <MenuCard />
<<<<<<< HEAD
      <Awards />
      <Guests />
=======
      <Awards/>
>>>>>>> ec83d5c762d12d0603d216d876a41298354cffb4
    </div>
  );
};

export default Home;
