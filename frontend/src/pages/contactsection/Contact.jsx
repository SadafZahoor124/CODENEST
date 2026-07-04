import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <div className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have questions or suggestions?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-box">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Feel free to contact us anytime.
            Our team will respond as soon as possible.
          </p>

          <h4>Email</h4>
          <p>support@codenest.com</p>

          <h4>Phone</h4>
          <p>+92 300 1234567</p>

          <h4>Location</h4>
          <p>Pakistan</p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;