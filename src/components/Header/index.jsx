import React from "react";
import "./style.css";

const Header = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.MZWFb8HVr95lwi385_w6vAAAAA&w=400&h=400&c=7"
            alt="Usuario"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
