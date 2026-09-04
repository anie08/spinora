import logo from "../../assets/header/logo.png";
import menuBtn from "../../assets/header/menu-button.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menuBtn">
        <img src={menuBtn} alt="Menu" className="menuBtn" />
      </div>
    </div>
  );
};

export default Header;
