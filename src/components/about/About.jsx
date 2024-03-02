import "./about.scss";
import { docs } from "../../data/documents";
import { technologies } from "../../data/technologies";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Modal from "../modal/Modal";
import DocumentItem from "../documentItem/DocumentItem";

const variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -15,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    if (isInView) {
      animate(
        "#title",
        { opacity: [0, 1], y: [-300, 30, 0] },
        { duration: 1, delay: 1 }
      );
      animate(
        "#title1",
        { opacity: [0, 1], x: [-300, 80, 0] },
        { duration: 1, delay: 1 }
      );
      animate(
        "#title2",
        { opacity: [0, 1], x: [300, -80, 0] },
        { duration: 1, delay: 1 }
      );
      animate(
        ".technologiesItem",
        { opacity: [0, 1], y: [300, 0] },
        { duration: 0.3, delay: stagger(0.1) }
      );
      animate(
        ".documentsItem",
        { opacity: [0, 1], y: [300, 0] },
        { duration: 1.5, delay: stagger(0.25), at: "-1.5" }
      );
    }
  }, [isInView, animate]);

  return (
    <div className="about" ref={scope}>
      <h1 id="title">About Me</h1>
      <div className="aboutContainer" ref={ref}>
        <div className="technologies">
          <p id="title1">Web technologies in which I have experience</p>
          <ul className="technologiesList">
            {technologies.map((technology) => (
              <motion.li
                key={technology.id}
                className="technologiesItem"
                variants={variants}
                initial={"initial"}
                whileHover={"animate"}
              >
                <div className="technologiesWrapper">
                  <img
                    src={technology.svg}
                    alt={technology.name}
                    loading="lazy"
                  />
                </div>
                <p className="technologiesTitle">
                  {technology.name.length < 14
                    ? technology.name
                    : technology.name.slice(0, 13) + " .."}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="documents">
          <p id="title2">My Documents</p>
          <ul className="documentsList">
            {docs.map((doc) => (
              <DocumentItem
                key={doc.id}
                doc={doc}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setDocId={setDocId}
              />
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          docId={docId}
        />
      )}
    </div>
  );
};

export default About;
