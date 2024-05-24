import React from "react";
import "../styles/contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <p>
      Email: <a href="mailto:chiragbohr@gmail.com">chiragbohr@gmail.com</a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href="www.linkedin.com/in/chirag-bohra"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.linkedin.com/in/chirag-bohra
      </a>
    </p>
    <p>
      GitHub:{" "}
      <a
        href="https://github.com/cbohra"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/cbohra
      </a>
    </p>
  </section>
);

export default Contact;
