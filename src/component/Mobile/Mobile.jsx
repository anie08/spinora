import turbo from "../../assets/common/turbo.svg";
import rotate from "../../assets/common/spin-icon.svg";
import balance from "../../assets/common/balance.svg";
import coin from "../../assets/common/coin.svg";
import plus from "../../assets/common/plus.svg";
import minus from "../../assets/common/minus.svg";
import "./Mobile.scss";
import React from "react";

const Mobile = ({
  spin,
  bet,
  increaseBet,
  decreaseBet,
  // winResult,
  totalAmount,
}) => {
  return (
    <div className="mobile-container">
      <div className="mobile-container_spin">
        <button
          className="mobile-container_spin_button minus-btn"
          onClick={decreaseBet}
        >
          <span className="mobile-container_spin_button_inc-dec">
            <img src={minus} alt="minus" className="minus" />
          </span>
        </button>
        <button className="mobile-container_spin_spin" onClick={spin}>
          <span className="mobile-container_spin_spin_rotate">
            <img src={rotate} alt="rotate" />
          </span>
        </button>
        <button className="mobile-container_spin_button" onClick={increaseBet}>
          <span className="mobile-container_spin_button_inc-inc">
            <img src={plus} alt="plus" className="plus" />
          </span>
        </button>
      </div>
      <div className="mobile-container_bet-amount">
        <div className="mobile-container_bet-amount_cont">
          <button className="mobile-container_bet-amount_bet">
            <span className="mobile-container_bet-amount_bet_balance">
              <img src={coin} alt="coin" className="coin" />
            </span>
          </button>
          <div className="mobile-container_bet-amount_text-box">
            <span className="mobile-container_bet-amount_label">Bet</span>
            <span className="mobile-container_bet-amount_bet_balance_text">
              {bet.toFixed(2)}
            </span>
          </div>
        </div>
        <button className="mobile-container_bet-amount_turbo">
          <span className="mobile-container_bet-amount_turbo_turbo">
            <img src={turbo} alt="turbo" className="turbo" />
          </span>
        </button>
        <div className="mobile-container_bet-amount_cont mobile-container_bet-amount_cont--reverse">
          <div className="mobile-container_bet-amount_text-box">
            <span className="mobile-container_bet-amount_label">Balance</span>
            <span className="mobile-container_bet-amount_bet_balance_text">
              {totalAmount.toFixed(2)}
            </span>
          </div>
          <button className="mobile-container_bet-amount_bet">
            <span className="mobile-container_bet-amount_bet_balance">
              <img src={balance} alt="balane" className="balance" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
