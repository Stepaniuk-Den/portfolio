import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="aboutContainer">
        <div className="technologies">
          <p>Web technologies in which I have experience</p>
          {/* <div className="technologies"> */}
          <ul className="technologiesList">
            <li>
              <div className="technologiesWrapper">
                <img src="/html.svg" alt="html" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/css.svg" alt="css" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/sass.svg" alt="sass" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/javascript copy.svg" alt="javascript" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/git.svg" alt="git" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/npm.svg" alt="npm" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/mongodb.svg" alt="mongodb" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/react.svg" alt="react" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/redux.svg" alt="redux" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/bootstrap.svg" alt="bootstrap" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/nodejs.svg" alt="nodejs" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/firebase.svg" alt="firebase" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/github.svg" alt="github" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/gitlab.svg" alt="gitlab" />
              </div>
            </li>
            <li>
              <div className="technologiesWrapper">
                <img src="/gitlab.svg" alt="gitlab" />
              </div>
            </li>
          </ul>
          {/* </div> */}
        </div>
        <div className="documents">
          <p>My Documents</p>
          <ul className="documentsList">
            <li>
              <div className="documentWrapper">
                <img src="/sertificate.webp" alt="sertificate" />
              </div>
            </li>
            <li>
              <div className="documentWrapper">
                <img src="/fullstack_1.webp" alt="addition1" />
              </div>
            </li>
            <li>
              <div className="documentWrapper">
                <img src="/fullstack_2.webp" alt="addition2" />
              </div>
            </li>
            <li>
              <div className="documentWrapper">
                <img src="/fullstack_3.webp" alt="addition3" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
