import "./Hero.scss";

const Hero = (props) => {
  const { selectedVideoImg, selectedVideoVideo } = props;
  return (
    <section className="hero">
      <video
        type="video/mp4"
        className="hero__video"
        poster={selectedVideoImg}
        controls
      >
        <source className="hero__video-source" src={selectedVideoVideo} />
      </video>
    </section>
  );
};
export default Hero;
