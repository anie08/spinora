import plus from "../../assets/common/plus.svg";
import minus from "../../assets/common/minus.svg";
import coin from "../../assets/common/coin.svg";
import turbo from "../../assets/common/turbo.svg";
import rotate from "../../assets/common/spin-icon.svg";

import "./Footer.scss";
import close from "../../assets/common/close.svg";
// import burgerMenu from "../../assets/common/burgerMenu.svg";
// import { useState } from "react";

const Footer = ({
  spin,
  bet,
  increaseBet,
  decreaseBet,
  // winResult,
  totalAmount,
  isTurbo,
  toggleTurbo,
}) => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="box-one">
          <button className="control-btn minus-btn" onClick={decreaseBet}>
            <img src={minus} alt="minus" />
          </button>

          <div className="box-one_box-one">
            <span className="bet-value">{bet.toFixed(2)}</span>
          </div>

          <button className="control-btn plus-btn" onClick={increaseBet}>
            <img src={plus} alt="plus" />
          </button>
        </div>

        <div className="contCoin">
          <button className="button">
            {/*<img src={button} alt="button" />*/}
            <span className="coin">
              <img src={coin} alt="coin" />
            </span>
          </button>
        </div>

        <button className="betPanel" onClick={spin}>
          <span className="rotate">
            <img src={rotate} alt="rotate" />
          </span>
        </button>

        <div className="conButton">
          <button
            className={`button ${isTurbo ? "active-turbo" : ""}`}
            onClick={toggleTurbo}
          >
            <span className="turbo">
              <img src={turbo} alt="turbo" />
            </span>
          </button>
        </div>
        <div className="boxSecond">
          {/*<img src={box} alt="box" />*/}
          <span className="balance-value">{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
