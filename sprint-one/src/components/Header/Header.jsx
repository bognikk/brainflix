import "../Header/Header.scss";
import logoImg from "../../assets/images/Logo-brainflix.svg";
import serchIcon from "../../assets/images/Icon-search.svg";
import uploadIcon from "../../assets/images/Icon-upload.svg";


function Header() {
  return (
    <header className="header">
      <a className="header__logo-link" href="">
        <img className="header__logo-img" src={logoImg} alt="logo" />
      </a>
      <form className="header__form">
        {/* <img src={serchIcon} alt="" /> */}
        <input
          className="header__form__input"
          placeholder="Search"
          type="text"
        />
      </form>
      <div className="header__upload">
        <button className="header__upload__btn">
          <img className="header__upload__btn__icon" src={uploadIcon} alt="" />
          UPLOAD
        </button>
        <div className="header__upload__img"></div>
      </div>
    </header>
  );
}
export default Header;
