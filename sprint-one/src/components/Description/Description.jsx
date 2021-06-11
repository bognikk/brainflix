import "../Description/Description.scss";
import viewsIcon from "../../assets/images/Icon-views.svg";
import likesIcon from "../../assets/images/Icon-likes.svg";

const Description = (props) => {
  return (
    <section className="desc">
      <h1 className="desc__main-title">{props.selectedVideo.title}</h1>
      <div className="desc__card desc__card--first">
        <p className="desc__credits">By {props.selectedVideo.channel}</p>
        <p className="desc__date">
          {new Date(props.selectedVideo.timestamp).toLocaleDateString("en-US")}
        </p>
      </div>
      <div className="desc__card desc__card--second">
        <div className="desc__wrapper">
          <img className="desc__icon" src={viewsIcon} alt="viewsIcon" />
          <p className="desc__views">{props.selectedVideo.views}</p>
        </div>
        <div className="desc__wrapper">
          <img className="desc__icon" src={likesIcon} alt="likesIcon" />
          <p className="desc__likes">{props.selectedVideo.likes}</p>
        </div>
      </div>
      <div className="desc__lower">
        <p className="desc__lower__text">{props.selectedVideo.description}</p>
      </div>
    </section>
  );
};
export default Description;
