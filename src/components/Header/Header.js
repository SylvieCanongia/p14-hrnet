import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import LogoHeader from './logo.jpg';

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <nav className="header">
      { location.pathname === "/" &&
        <>
          <div className="header__container">
            <div className="header__container__logo">
              <NavLink exact="true" to="/">
                <div className="logo">
                  <img className="logoImg" src={LogoHeader} alt="Logo de Wealth Health" />
                </div>
              </NavLink>
            </div>
            <div className= "header__title">HRnet</div>
          </div>
        </>
      }

      { location.pathname === "/create-employee" &&
          <>
            <div className="header__container--centered">
              <div className="header__container__logo">
                <NavLink exact="true" to="/">
                  <div className="logo">
                    <img src={LogoHeader} alt="Logo de Wealth Health" />
                  </div>
                </NavLink>
              </div>
              <div className= "header__title">HRnet</div>
            </div>
          </>
        }
    </nav>
  );
};

export default Header;
