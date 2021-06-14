import "../Header/Header.scss";
import logoImg from "../../assets/images/Logo-brainflix.svg";
import uploadIcon from "../../assets/images/Icon-upload.svg";

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo-link" href="/#">
        <img className="header__logo-img" src={logoImg} alt="logo" />
      </a>
      <div className="header__right-container">
        <form className="header__form">
          <input
            className="header__form__input"
            placeholder="Search"
            type="text"
          />
        </form>
        <div className="header__upload">
          <button className="header__upload__btn">
            <img
              className="header__upload__btn__icon"
              src={uploadIcon}
              alt="plus icon"
            />
            UPLOAD
          </button>
          <div className="header__upload__img"></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
