import "./Modal.scss";

const Modal = (props) => {
  const { title, action } = props;
  return (
    <>
      <div className="backdrop" />
      <div className="modal">
        <h1 className="modal__heading">{title}</h1>
        <button onClick={(event) => action(event)} className="modal__btn">
          Okay
        </button>
      </div>
    </>
  );
};

export default Modal;
