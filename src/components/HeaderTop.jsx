import React from "react";

const HeaderTop = () => {

  const styled = {}

  return (
    <div className="nav-top">
      <div className="container">
        <div className="nav-top-wrapp">
          <ul className="nav-top-list flex">
            <li className="nav-top-item">
              <a href="#" className="nav-top-link">
                Mahsulotlar katalogi
              </a>
            </li>
            <li className="nav-top-item">
              <a href="#" className="nav-top-link">
                Foto-lavhalar
              </a>
            </li>
            <li className="nav-top-item">
              <a href="#" className="nav-top-link">
                Yetkazib berish va to'lash
              </a>
            </li>
            <li className="nav-top-item">
              <a href="#" className="nav-top-link">
                Aksiya
              </a>
            </li>
            <li className="nav-top-item">
              <a href="#" className="nav-top-link">
                Yangi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
