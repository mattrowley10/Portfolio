export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-header">Contact</h2>
      <ul className="contact-list">
        <li className="contact-list-item">
          <img src="mail-icon.webp" className="contact-icon" />
        </li>
        <li className="contact-list-item">
          <img src="phone-icon.png" className="contact-icon" />
        </li>
        <li className="contact-list-item">
          <a href="https://www.linkedin.com/in/matthewrowley28/">
            <img src="linked-in-icon.png" className="contact-icon" />
          </a>
        </li>
        <li className="contact-list-item">
          <a href="https://github.com/mattrowley10">
            <img src="git-icon.png" className="contact-icon" />
          </a>
        </li>
      </ul>
      <p
        className="contact-details"
        onCopy={() => this.setState({ copied: true })}
      >
        Mattrowley10@gmail.com
      </p>
      <br></br>
      <br></br>
      <p className="contact-details" onClick={() => {}}>
        (720)-990-8669
      </p>
    </div>
  );
}
