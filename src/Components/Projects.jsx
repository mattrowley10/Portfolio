import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h2 className="projects-header">Projects</h2>
      <div className="container">
        <Carousel
          id="projects"
          title="Projects"
          activeIndex={index}
          onSelect={handleSelect}
          data-bs-theme="dark"
        >
          <Carousel.Item>
            <a href="https://astonishing-dolphin-abeb89.netlify.app/">
              <img src="qwirty.png" className="project-img" />
            </a>
            <Carousel.Caption>Designing the Holy Grail</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://amca.onrender.com/">
              <img src="amca.png" className="project-img" />
            </a>
            <Carousel.Caption>Team built E-Commerce Website</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://fabulous-klepon-630ec6.netlify.app/">
              <img src="firstsite.png" className="project-img" />
            </a>
            <Carousel.Caption>My first website</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://papaya-praline-b8ce49.netlify.app/">
              <img src="tictactoe.png" className="project-img" />{" "}
            </a>
            <Carousel.Caption>Tic-Tac-Toe! Give it a Go!</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://vocal-zuccutto-ced39d.netlify.app/">
              <img src="strangersthing.png" className="project-img" />
            </a>
            <Carousel.Caption>A site consuming an API</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://rad-frangipane-ab7eaa.netlify.app/">
              <img src="pupbowl.png" className="project-img" />
            </a>
            <Carousel.Caption>
              Learning flex-box and API consumption
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://ornate-panda-539b81.netlify.app/">
              <img src="secondsite.png" className="project-img" />
            </a>
            <Carousel.Caption>My second Portfolio</Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
