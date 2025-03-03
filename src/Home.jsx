import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css"; // Create a CSS file for styling

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <h1 className={style.title}>Welcome to My Todo List App</h1>
      <p className={style.welcomeMessage}>
        Stay organized and manage your tasks efficiently!
      </p>
      <Link to="/TodoList">
        <button className={style.startButton}>Go to Todo List</button>
      </Link>
    </div>
  );
};

export default Home;
