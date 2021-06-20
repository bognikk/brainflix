import { Link } from "react-router-dom";
import "./NextVideo.scss";

const NextVideo = (props) => {
  const { videos } = props;

  // state = {
  //   videos: [],
  // };

  // componentDidMount() {
  //   // GET videos for next video
  //   axios
  //     .get(`${BASE_URL}/videos${API_KEY}`)
  //     .then((resp) => {
  //       // console.log(resp.data);
  //       this.setState({
  //         videos: resp.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <section className="next-video">
      <h2 className="next-video__heading">NEXT VIDEO</h2>
      <div className="next-video__container">
        {videos.map((video) => {
          return (
            <Link
              to={`/${video.id}`}
              key={video.id}
              className="next-video__video"
            >
              <img
                className="next-video__video-img"
                src={video.image}
                alt="next video img"
              />
              <div className="next-video__video-description">
                <div className="next-video__video-title">{video.title}</div>
                <div className="next-video__video-credits">{video.channel}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default NextVideo;
