import "./documentItem.scss";
import PropTypes from "prop-types";
import { IoMdDownload } from "react-icons/io";
import { IoMdResize } from "react-icons/io";

const DocumentItem = ({ doc, setIsModalOpen, setDocId }) => {
  const { id, docTitle, docImg, path } = doc;

  const handleOpenModal = () => {
    setDocId(id);
    setIsModalOpen(true);
  };
  return (
    <li className="documentsItem">
      <div className="documentWrapper">
        <img src={docImg} alt={docTitle.eng} />
      </div>
      <div className="buttonBox">
        <button className="openModal" onClick={handleOpenModal}>
          <IoMdResize />
        </button>
        <button className="loadDoc">
          <a href={path} download={docTitle.eng}>
            <IoMdDownload />
          </a>
        </button>
      </div>
    </li>
  );
};

DocumentItem.propTypes = {
  doc: PropTypes.object.isRequired,
  setDocId: PropTypes.func,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default DocumentItem;
