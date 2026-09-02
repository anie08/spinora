import {useRef, useState} from 'react';
import './Spinora.css';
import Background from '../assets/background/bg.jpg'
import logo from '../assets/header/logo.png'
import menuBtn from '../assets/header/menu-button.png'
import littleWheel from '../assets/background/wheels/wheel1.png'
import betBtn from '../assets/background/wheels/marker.png'
import arrow from '../assets/background/wheels/arrow.png'
import topBoard from '../assets/background/wheels/top-board.png'
import wheelLights from '../assets/background/wheels/wheel-lights-off.png'
import wheelBig from '../assets/background/wheels/wheel3.png'
import winModal from '../assets/background/win-modal.png'
import AmountPanel from '../assets/intro/amount-panel.png'
import betPanel from '../assets/intro/bet-panel.png'


const sectors = ['0.5X', '1X', '2X', 'Next Wheel', '5X', '10X', '0.5X', '2X'];
const length = sectors.length;
const sectorDegree = 360 / length;

const Spinora = () => {
    const [spining, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [winResult, SetwinResult] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const spin = () => {
        if (spining) {
            return
        }

        setSpinning(true);
        setShowModal(false);


        const randomIndex = Math.floor(Math.random() * length);

        console.log(sectors[randomIndex])

        const fullRotations = 360 * 5;
        const targetDegree = fullRotations + (360 - (randomIndex * sectorDegree));
        setRotation(prev => prev + targetDegree - (prev % 360));


        setTimeout(() => {
            setSpinning(false);
            SetwinResult(sectors[randomIndex]);
            setShowModal(true);
        }, 3000);
    }

    return (
        <div className='container'>
            <div className="header">
                <img src={logo} alt="Logo" className="logo"/>
                <img src={menuBtn} alt="Menu" className="menuBtn"/>
            </div>
            <div className='wheelContainer'>
                <div className="wheelContainer-inner">
                    <img src={wheelLights} alt="Wheel Lights" className="wheelLights"/>
                    <img src={topBoard} alt="Top Board" className="topBoard"/>
                    <img src={wheelBig} alt="Wheel Big" className="wheelBig"/>
                    <div style={{
                        width: '100%',
                        zIndex: 4,
                        transition: '1s',
                        aspectRatio: 1,
                        transform: `rotate(${rotation}deg)`
                    }}>
                        <img src={littleWheel} alt="Wheel Little" className="little"/>
                    </div>
                    <img onClick={spin} src={betBtn} alt="Wheel Bet " className="betBtn"/>
                </div>
            </div>
        </div>
    )
};

export default Spinora;