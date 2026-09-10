import logo from "../../assets/header/logo.png";
import menuBtn from "../../assets/header/menu-button.png";
import burgerMenu from "../../assets/common/burgerMenu.svg";
import close from "../../assets/common/close.svg";
import audio from "../../assets/common/audio.svg";
import "./Header.scss";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(true);
  const menuRef = useRef(null); // Հղում մենյուի բլոկի վրա

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAudio = () => {
    setIsAudioActive(!isAudioActive);
  };

  // Ֆունկցիա, որը փակում է մենյուն, եթե սեղմել ենք դրսում
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="header-right" ref={menuRef}>
        <button className="menuBtn" onClick={toggleAudio}>
          <img src={audio} alt="Audio Icon" />
        </button>

        <button className="menuBtn" onClick={toggleMenu}>
          <img
            src={isOpen ? close : burgerMenu}
            alt={isOpen ? "Close" : "Burger Menu"}
          />
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            {/*<div className="menu-top-bar">*/}
            {/*  <div className="audio-in-menu" onClick={toggleAudio}>*/}
            {/*    <img src={menuBtn} alt="Bg" className="menu-bg" />*/}
            {/*    <img src={audio} alt="Audio" className="audio-icon" />*/}
            {/*  </div>*/}
            {/*  <div className="close-in-menu" onClick={toggleMenu}>*/}
            {/*    <img src={menuBtn} alt="Bg" className="menu-bg" />*/}
            {/*    <img src={close} alt="Close" className="close-icon" />*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="menu-item">
              <span>Bet History</span>
            </div>
            <div className="menu-item">
              <span>Game Guide</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
