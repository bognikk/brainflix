import { Link } from "react-router-dom";
import "../NextVideo/NextVideo.scss";

const NextVideo = (props) => {
  const { videos } = props;
  
  return (
    <section className="next-video">
      <h2 className="next-video__heading">NEXT VIDEO</h2>
      <div className="next-video__container">
        {videos.map((video) => {
          return (
            <Link
              to={`/${video.id}`}
              key={video.id}
              // onClick={() => fetchData(video.id.toString())}
              className="next-video__video"
            >
              <img
                className="next-video__video__img"
                src={video.image}
                alt="next video img"
              />
              <div className="next-video__video__description">
                <div className="next-video__video__title">{video.title}</div>
                <div className="next-video__video__credits">
                  {video.channel}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default NextVideo;
