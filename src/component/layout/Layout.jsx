import {useRef, useState} from 'react';
import './Layout.scss';
import Background from '../../assets/background/bg.jpg'
import logo from '../../assets/header/logo.png'
import menuBtn from '../../assets/header/menu-button.png'
import littleWheel from '../../assets/background/wheels/wheel1.png'
import betBtn from '../../assets/background/wheels/marker.png'
import arrow from '../../assets/background/wheels/arrow.png'
import topBoard from '../../assets/background/wheels/top-board.png'
import wheelLights from '../../assets/background/wheels/wheel-lights-off.png'
import wheelBig from '../../assets/background/wheels/wheel3.png'
import winModal from '../../assets/background/win-modal.png'
import AmountPanel from '../../assets/intro/amount-panel.png'
import betPanel from '../../assets/intro/bet-panel.png'


const sectors = ['0X', '1X', '2X', '1X', '0X', '0.5X', 'Next Wheel', 'Next Wheel'];
const bigSectors = ['X10', 'X1', 'X20', 'X5', 'X10', 'X2', 'X50', 'X0', 'X20', 'X5', 'X10', 'X2', 'X5', 'X0', 'X100', 'X2'];

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
      return
    }

    setSpinning(true);
    setShowModal(false);


    // const randomIndex = Math.floor(Math.random() * length);
    const randomIndex = Math.floor(Math.random() * length);
    const landedSector = sectors[randomIndex];

    console.log(sectors[randomIndex])

    const fullRotations = 360 * 5;
    const targetDegree = fullRotations + (randomIndex * sectorDegree);
    setRotation(prev => prev + targetDegree - (prev % 360));


    setTimeout(() => {
      setSpinning(false);
      if (landedSector === 'Next Wheel') {
        startBigWheelSpin();
      } else {
        SetwinResult(sectors[randomIndex]);
        setShowModal(true);

      }
    }, 3000);
  }
  const startBigWheelSpin = () => {
    setBigSpinning(true);
    const randomBindex = Math.floor(Math.random() * bigLength);
    const landedBsector = bigSectors[randomBindex];
    console.log(bigSectors[randomBindex])
    const fullBrotations = 360 * 5;
    const targetBdegree = fullBrotations + (randomBindex * sectorBdegree);
    setBigRotation(prev => prev + targetBdegree - (prev % 360));
    setTimeout(() => {
      setBigSpinning(false);
      SetwinResult(landedBsector);
      setShowModal(true);
    }, 3000);
  };


  return (
    <div className='container'>
      <div className="header">
        <div className="logo"><img src={logo} alt="Logo" className="logo"/></div>
        <div className="menuBtn"><img src={menuBtn} alt="Menu" className="menuBtn"/></div>
      </div>
      <div className='wheelContainer'>
        <div className="wheelContainer-inner">
          <div className="wheelBigCont" style={{transform: `rotate(${bigRotation}deg)`}}><img src={wheelBig}
                                                                                              alt="Wheel Big"
                                                                                              className="wheelBig"/>
          </div>
          <div className={"wheelLightsCont"}><img src={wheelLights} alt="Wheel Lights"
                                                  className="wheelLights"/>
          </div>
          <div className="topBoardCont"><img src={topBoard} alt="Top Board" className="topBoard"/></div>
          <div style={{transform: `rotate(${rotation}deg)`}} className="littleCont"><img src={littleWheel}
                                                                                         alt="Wheel Little"
                                                                                         className="little"/>
          </div>
          <div className={"betBtn"} onClick={spin}><img src={betBtn} alt="Wheel Bet " className="betBtn"/>
          </div>
          <div className="arrowCont">
            <img src={arrow} alt="arrow" className="arrow"/>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Layout;