import { createContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(() => {});
  const [error, setError] = useState(() => {});
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");

  const openModal = ({
    show,
    title,
    description,
    onSuccess,
    onError,
    successText,
    errorText,
  }) => {
    setShowModal(show);
    setTitle(title);
    setDescription(description);
    setSuccess(onSuccess);
    setError(onError);
    setSuccessText(successText);
    setErrorText(errorText);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={error}>
            {errorText}
          </Button>
          <Button variant="primary" onClick={success}>
            {successText}
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
