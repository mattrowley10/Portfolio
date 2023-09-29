import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
export default function Home() {
  const ref = useRef();
  const inView = useInView(ref, {
    threshold: 0,
    margin: "-150px",
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
      <img className="homeimg" src="MomsWedding.jpg" />
      <p className="under-pic">
        Hello, my name is Matthew and I am a<br></br> Software Developer.
      </p>
      <ul className="icon-list">
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <img className="icons" src="jsIcon.png" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
            <img className="icons" src="reacticon.png" />
          </a>
        </li>
        <li>
          <a href="https://react-bootstrap.netlify.app/">
            <img className="icons" src="bootstrapicon.png" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img className="icons" src="htmlicon.png" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img className="icons" src="cssicon.png" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL">
            <img className="icons" src="sqlicon.png" />
          </a>
        </li>
        <li>
          <a href="https://www.postgresql.org/docs/current/index.html">
            <img className="icons" src="postgresqlicon.png" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">
            <img className="icons" src="nodeicon.svg" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">
            <img className="icons" src="expressicon.png" />
          </a>
        </li>
      </ul>
      <h2 className="about-header">About me</h2>
      <div className="about-section" id="about">
        <p className="about-body">
          Herbalist turned Web Developer with an earnest desire to help the
          world and continue learning as much as possible during the process. In
          my free time you might find me making tea and meditating, playing
          video games, or wrestling (and/or cuddling) with my dog. Since delving
          into the world of code, that is where I find myself any other time.
          And for such a simple life, I am grateful.
        </p>
        <img src="techimage.jpeg" className="aboutimg" ref={ref} />
      </div>
    </div>
  );
}
