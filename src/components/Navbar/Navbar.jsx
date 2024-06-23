import "./Navbar.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Upload from "../../assets/Icons/upload.svg";
import Search from "../../assets/Icons/search.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to="/home">
          <img className="header__logo" src={Logo} alt="brainflix logo" />
        </Link>

        <nav className="header__form">
          <div className="header__searchWrapper">
            <input
              className="header__search"
              type="search"
              placeholder="Search"
            ></input>
            <img
              className="header__searchImg"
              src={Search}
              alt="brainflix seaerch icon"
            />
          </div>
          <div className="header__form-bottom">
            <Link className="header__button" to="/uploadVideo">
              <img
                className="header__uploadImg"
                src={Upload}
                alt="brainflix seaerch icon"
              ></img>
              UPLOAD
            </Link>

            <div className="header__mohan"></div>
          </div>
        </nav>
      </header>

      <header className="header-mob">
        <Link to="/">
          <img className="header-mob__logo" src={Logo} alt="brainflix logo" />
        </Link>
        <nav className="header-mob__form">
          <div className="header-mob__searchWrapper">
            <input
              className="header-mob__search"
              type="search"
              placeholder="Search"
            ></input>
            <img
              className="header-mob__searchImg"
              src={Search}
              alt="brainflix seaerch icon"
            />
            <div className="header__mohan"></div>
          </div>
          <div className="header-mob__form-bottom">
            <Link className="header-mob__button" to="/upload">
              <img
                className="header-mob__uploadImg"
                src={Upload}
                alt="brainflix seaerch icon"
              ></img>
              UPLOAD
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
