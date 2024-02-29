import "./about.scss";
import { docs } from "../../data/documents";
import { technologies } from "../../data/technologies";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="aboutContainer">
        <div className="technologies">
          <p>Web technologies in which I have experience</p>
          {/* <div className="technologies"> */}
          <ul className="technologiesList">
            {technologies.map((technology) => (
              <li key={technology.id}>
                <div className="technologiesWrapper">
                  <img src={technology.svg} alt={technology.name} />
                </div>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
        <div className="documents">
          <p>My Documents</p>
          <ul className="documentsList">
            {docs.map((doc) => (
              <li key={doc.id}>
                <div className="documentWrapper">
                  <img src={doc.docImg} alt={doc.docTitle} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
