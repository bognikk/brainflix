import "../Hero/Hero.scss";

const Hero = (props) => {
  return (
    <section className="hero">
      <video controls className="hero__video" poster={props.selectedVideoImg}>
        <source
          className="hero__video__source"
          // src="https://project-2-api.herokuapp.com/stream"
        />
      </video>
    </section>
  );
};
export default Hero;
