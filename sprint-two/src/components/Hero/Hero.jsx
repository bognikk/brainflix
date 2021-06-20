import "./Hero.scss";

const Hero = (props) => {
  const { selectedVideoImg } = props;
  return (
    <section className="hero">
      <video controls className="hero__video" poster={selectedVideoImg}>
        <source
          className="hero__video-source"
          // src="https://project-2-api.herokuapp.com/stream" this is commented because it's showing an error in console
        />
      </video>
    </section>
  );
};
export default Hero;
