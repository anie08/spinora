import wheelBig from "../../assets/background/wheels/wheel3.png";

import wheelLights from "../../assets/background/wheels/wheel-lights-off.png";

import topBoard from "../../assets/background/wheels/top-board.png";

import littleWheel from "../../assets/background/wheels/wheel1.png";

import betBtn from "../../assets/background/wheels/marker.png";

import arrow from "../../assets/background/wheels/arrow.png";

import "./Wheel.scss";

const Wheel = ({ spin, bigRotation, rotation }) => {
  return (
    <div className="wheelContainer">
      <div className="wheelContainer-inner">
        <div
          className="wheelBigCont"
          style={{ transform: `rotate(${bigRotation}deg)` }}
        >
          <img
            src={wheelBig}

            alt="Wheel Big"

            className="wheelBig"
          />
        </div>

        <div className={"wheelLightsCont"}>
          <img
            src={wheelLights}
            alt="Wheel Lights"

            className="wheelLights"
          />
        </div>

        <div className="topBoardCont">
          <img src={topBoard} alt="Top Board" className="topBoard" />
        </div>

        <div
          style={{ transform: `rotate(${rotation}deg)` }}
          className="littleCont"
        >
          <img
            src={littleWheel}

            alt="Wheel Little"

            className="little"
          />
        </div>

        <div className={"betBtn"} onClick={spin}>
          <img src={betBtn} alt="Wheel Bet " className="betBtn" />
        </div>

        <div className="arrowCont">
          <img src={arrow} alt="arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Wheel;
