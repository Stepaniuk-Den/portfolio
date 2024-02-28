import "./portfolio.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Project 1",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in earum sed error amet laboriosam. Nisi reprehenderit aspernatur sunt earum sint tenetur cumque dolores accusantium totam minus animi, fugit quis?",
  },
  {
    id: 2,
    title: "Project 2",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in earum sed error amet laboriosam. Nisi reprehenderit aspernatur sunt earum sint tenetur cumque dolores accusantium totam minus animi, fugit quis?",
  },
  {
    id: 3,
    title: "Project 3",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in earum sed error amet laboriosam. Nisi reprehenderit aspernatur sunt earum sint tenetur cumque dolores accusantium totam minus animi, fugit quis?",
  },
  {
    id: 4,
    title: "Project 4",
    img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in earum sed error amet laboriosam. Nisi reprehenderit aspernatur sunt earum sint tenetur cumque dolores accusantium totam minus animi, fugit quis?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Portfolio;
