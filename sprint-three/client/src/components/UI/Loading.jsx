import "./Loading.scss"

const EmptyComment = (props) => {
  const { text } = props;
  return <h3 className="loading">{text}</h3>;
};

export default EmptyComment;
