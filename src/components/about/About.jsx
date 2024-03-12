import "./about.scss";
import PropTypes from "prop-types";
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

const About = ({ lang }) => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });
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
      animate(".aboutText", { opacity: [0, 1] }, { duration: 2, delay: 1 });
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
      <h1 id="title">
        {lang === "en" && "About Me"}
        {lang === "ua" && "Про Мене"}
      </h1>
      {lang === "en" && (
        <p className="aboutText">
          I am an experienced front end developer with knowledge of HTML, CSS,
          JavaScript and React. I have a lot of experience working with people
          and I like to work in a team. I will be happy to participate in the
          creation of convenient projects and applications that help people in
          their lives and business. I am responsible, I like to acquire new
          knowledge and I am always ready for challenges.
        </p>
      )}
      {lang === "ua" && (
        <p className="aboutText">
          Я досвідчений фронтенд розробник зі знанням HTML, CSS, JavaScript і
          React. Маю великий досвід роботи з людьми і люблю працювати в команді.
          Буду радий брати участь у створенні зручних проектів та додатків, які
          допомагають людям у житті та бізнесі. Я відповідальний, люблю
          здобувати нові знання та завжди готова до викликів.
        </p>
      )}

      <div className="aboutContainer" ref={ref}>
        <div className="technologies">
          <p id="title1">
            {lang === "en" && "Web technologies in which I have experience"}
            {lang === "ua" && "Веб-технології, в яких я маю досвід"}
          </p>
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
                  {technology.name.length < 13
                    ? technology.name
                    : technology.name.slice(0, 12) + " .."}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="documents">
          <p id="title2">
            {lang === "en" && "My Documents"}
            {lang === "ua" && "Мої документи"}
          </p>
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
          lang={lang}
        />
      )}
    </div>
  );
};

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
