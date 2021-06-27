import "./EmptyComment.scss";

const EmptyComment = (props) => {
  const { text } = props;
  return <h3 className="emptyComment">{text}</h3>;
};

export default EmptyComment;
