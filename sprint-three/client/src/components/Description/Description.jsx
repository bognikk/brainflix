import viewsIcon from "../../assets/images/Icon-views.svg";
import likesIcon from "../../assets/images/Icon-likes.svg";
import "./Description.scss";

const Description = ({ selectedVideo, likeVideo }) => {
  return (
    <section className="desc">
      <h1 className="desc__main-title">{selectedVideo.title}</h1>
      <div className="desc__cards-wrapper">
        <div className="desc__card">
          <p className="desc__credits">By {selectedVideo.channel}</p>
          <p className="desc__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString("en-US")}
          </p>
        </div>
        <div className="desc__card">
          <div className="desc__wrapper">
            <img className="desc__icon" src={viewsIcon} alt="viewsIcon" />
            <p className="desc__views">{selectedVideo.views}</p>
          </div>
          <div className="desc__wrapper">
            <img
              onClick={() => likeVideo()}
              className="desc__icon desc__icon--like"
              src={likesIcon}
              alt="likesIcon"
            />
            <p className="desc__likes">
              {selectedVideo.likes
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </div>
      <div className="desc__lower">
        <p className="desc__lower-text">{selectedVideo.description}</p>
      </div>
    </section>
  );
};

export default Description;
