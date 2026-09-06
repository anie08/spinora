import plus from "../../assets/common/plus.svg";
import minus from "../../assets/common/minus.svg";
import coin from "../../assets/common/coin.svg";
import turbo from "../../assets/common/turbo.svg";
import button from "../../assets/background/betPanel/button.png";
import box from "../../assets/background/betPanel/box.png";
import betPanel from "../../assets/intro/bet-panel.png";
import "./Footer.scss";
import { useState } from "react";

const Footer = ({
  spin,
  bet,
  increaseBet,
  decreaseBet,
  winResult,
  totalAmount,
}) => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="box-one">
          <div className="control-btn minus-btn" onClick={decreaseBet}>
            <img src={minus} alt="minus" />
          </div>

          <div className="box-one_box-one">
            <img src={box} alt="box" />
            <span className="bet-value">{bet.toFixed(2)}</span>
          </div>

          <div className="control-btn plus-btn" onClick={increaseBet}>
            <img src={plus} alt="plus" />
          </div>
        </div>

        <div className="contCoin">
          <div className="button">
            <img src={button} alt="button" />
          </div>
          <div className="coin">
            <img src={coin} alt="coin" />
          </div>
        </div>

        <div className="betPanel" onClick={spin}>
          <img src={betPanel} alt="betPanel" />
        </div>

        <div className="conButton">
          <div className="button">
            <img src={button} alt="button" />
          </div>
          <div className="turbo">
            <img src={turbo} alt="turbo" />
          </div>
        </div>

        <div className="boxSecond">
          <img src={box} alt="box" />
          <span className="balance-value">{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
