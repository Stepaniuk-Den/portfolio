import "./modal.scss";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { docs } from "../../data/documents";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ isModalOpen, setIsModalOpen, docId, lang }) => {
  const docItem = docs.find((doc) => doc.id === docId);

  useEffect(() => {
    if (!isModalOpen) return;
    document.body.classList.add("no-scroll");

    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        setIsModalOpen(false);
        document.body.classList.remove("no-scroll");
      }
    };
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsModalOpen, isModalOpen]);

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    setIsModalOpen(false);
  };

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleClickBtnClose();
    }
  };

  return createPortal(
    <>
      <div className="modal" onClick={handleClickOverlay}>
        <div className="wrapperModal">
          <h2>
            {lang === "en" && docItem.docTitle.en}
            {lang === "ua" && docItem.docTitle.ua}
          </h2>
          <img src={docItem.docImg} alt={docItem.docTitle.eng} />
          <IoMdClose
            className="closeModal"
            aria-label="close_button"
            onClick={handleClickBtnClose}
          />
        </div>
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  docId: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Modal;
