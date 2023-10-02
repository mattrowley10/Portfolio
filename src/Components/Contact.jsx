import { useState } from "react";
export default function Contact() {
  const [results, setResults] = useState(false);
  const onClick = () => setResults(!results);

  return (
    <div className="contact" id="contact">
      <h2 className="contact-header">Contact</h2>
      <ul className="contact-list">
        <li className="contact-list-item">
          <img
            src="mail-icon.webp"
            className="contact-icon"
            onClick={onClick}
          />
          {results ? <p className="email">mattrowley10@gmail.com</p> : <p></p>}
        </li>
        <br></br>
        <li className="contact-list-item">
          <img
            src="phone-icon.png"
            className="contact-icon"
            onClick={onClick}
          />
        </li>
        {results ? <p className="number">(720)-990-8669</p> : <p></p>}
        <br></br>
        <li className="contact-list-item">
          <a href="https://www.linkedin.com/in/matthewrowley28/">
            <img src="linked-in-icon.png" className="contact-icon" />
          </a>
        </li>
        <br></br>
        <li className="contact-list-item">
          <a href="https://github.com/mattrowley10">
            <img src="git-icon.png" className="contact-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
