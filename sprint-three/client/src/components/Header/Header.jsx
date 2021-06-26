import { Link } from "react-router-dom";
import logoImg from "../../assets/images/Logo-brainflix.svg";
import uploadIcon from "../../assets/images/Icon-upload.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link" href="/#">
        <img className="header__logo-img" src={logoImg} alt="logo" />
      </Link>
      <div className="header__right-container">
        <form className="header__form">
          <input
            className="header__form-input"
            placeholder="Search"
            type="text"
          />
        </form>
        <div className="header__upload">
          <Link to="/upload" className="header__upload-btn">
            <img
              className="header__upload-btn-icon"
              src={uploadIcon}
              alt="plus icon"
            />
            UPLOAD
          </Link>

          <div className="header__upload-img"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
