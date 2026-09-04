import "./Layout.scss";

import Wheel from "../Wheel/Wheel.jsx";

import Footer from "../Footer/Footer.jsx";

import Header from "../Header/Header.jsx";
import { useState } from "react";

const sectors = [
  "0X",
  "1X",
  "2X",
  "1X",
  "0X",
  "0.5X",
  "Next Wheel",
  "Next Wheel",
];

const bigSectors = [
  "X10",
  "X1",
  "X20",
  "X5",
  "X10",
  "X2",
  "X50",
  "X0",
  "X20",
  "X5",
  "X10",
  "X2",
  "X5",
  "X0",
  "X100",
  "X2",
];

const length = sectors.length;

const bigLength = bigSectors.length;

const sectorDegree = 360 / length;

const sectorBdegree = 360 / bigLength;

const Layout = () => {
  const [spining, setSpinning] = useState(false);

  const [rotation, setRotation] = useState(0);

  const [bigSpinning, setBigSpinning] = useState(false);

  const [bigRotation, setBigRotation] = useState(0);

  const [winResult, SetwinResult] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const spin = () => {
    if (spining || bigSpinning) {
      return;
    }

    setSpinning(true);

    setShowModal(false);

    // const randomIndex = Math.floor(Math.random() * length);

    const randomIndex = Math.floor(Math.random() * length);

    const landedSector = sectors[randomIndex];

    console.log(sectors[randomIndex]);

    const fullRotations = 360 * 5;

    const targetDegree = fullRotations + randomIndex * sectorDegree;

    setRotation((prev) => prev + targetDegree - (prev % 360));

    setTimeout(() => {
      setSpinning(false);

      if (landedSector === "Next Wheel") {
        startBigWheelSpin();
      } else {
        SetwinResult(sectors[randomIndex]);

        setShowModal(true);
      }
    }, 3000);
  };

  const startBigWheelSpin = () => {
    setBigSpinning(true);

    const randomBindex = Math.floor(Math.random() * bigLength);

    const landedBsector = bigSectors[randomBindex];

    console.log(bigSectors[randomBindex]);

    const fullBrotations = 360 * 5;

    const targetBdegree = fullBrotations + randomBindex * sectorBdegree;

    setBigRotation((prev) => prev + targetBdegree - (prev % 360));

    setTimeout(() => {
      setBigSpinning(false);

      SetwinResult(landedBsector);

      setShowModal(true);
    }, 3000);
  };

  return (
    <div className="container">
      <Header />
      <Wheel spin={spin} rotation={rotation} bigRotation={bigRotation} />
      <Footer spin={spin} />
    </div>
  );
};

export default Layout;
