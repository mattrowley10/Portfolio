import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
export default function Home() {
  const ref = useRef();
  const inView = useInView(ref, {
    threshold: 0,
    margin: "-200px",
  });
  useEffect(() => {
    if (inView) {
      ref.current.classList.add("active");
    } else {
      ref.current.classList.remove("active");
    }
  }, [ref, inView]);

  return (
    <div className="home" id="home">
      <img className="homeimg" src="MomsWedding.jpg" alt="Front Image" />
      {/* <p className="under-pic">
        Hello, my name is Matthew and I am a<br></br> Software Developer.
      </p> */}
      <ul className="icon-list">
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <img className="icons" src="jsIcon.png" alt="JavaScript" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
            <img className="icons" src="reacticon.png" alt="React" />
          </a>
        </li>
        <li>
          <a href="https://react-bootstrap.netlify.app/">
            <img
              className="icons"
              src="bootstrapicon.png"
              alt="React-Bootstrap"
            />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img className="icons" src="htmlicon.png" alt="HTML" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img className="icons" src="cssicon.png" alt="CSS" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL">
            <img className="icons" src="sqlicon.png" alt="SQL" />
          </a>
        </li>
        <li>
          <a href="https://www.postgresql.org/docs/current/index.html">
            <img className="icons" src="postgresqlicon.png" alt="PostgreSQL" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">
            <img className="icons" src="nodeicon.svg" alt="Node" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">
            <img className="icons" src="expressicon.png" alt="Express" />
          </a>
        </li>
      </ul>
      <h2 className="about-header">About me</h2>
      <div className="about-section" id="about">
        <p className="about-body">
          Associate Software Developer skilled in JavaScript, React and database
          design. Passionate about crafting elegant UIs and writing clean code
          to solve complex problems. When I am not solving algorithm problems or
          practicing database configuration, I am staying up to date on new
          features and technologies through proper implementation of code in my
          personal projects. My skills in both frontend and backend development
          along with my inquisitive nature and curiosity will be powerful assets
          to any organization. In my free time you might find me making tea and
          meditating, playing video games, or wrestling (and/or cuddling) with
          my dog. Since delving into the world of code, that is where I find
          myself any other time.
        </p>
        <div className="techImg">
          <img
            src="techimage.jpeg"
            className="aboutimg"
            ref={ref}
            alt="Tech Image"
          />
        </div>
      </div>
      <div className="contact-div">
        <ul className="contact-list">
          <li className="contact-list-item">
            <a href="https://github.com/mattrowley10">
              <img src="git-icon.png" className="contact-icon" alt="GitHub" />
            </a>
          </li>
          <li className="contact-list-item">
            <a href="https://www.linkedin.com/in/matthewrowley28/">
              <img
                src="linked-in-icon.png"
                className="contact-icon"
                alt="LinkedIn"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
