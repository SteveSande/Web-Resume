import ContactCSS from "./contact.module.css";

function Contact() {
  return (
    <div id="contact" className={ContactCSS.contact}>
      <h3 id="contact-me">Contact me on social media.</h3>
      <div id="social-links">
        <a
          id="linkedin-link"
          target="_blank"
          href="https://www.linkedin.com/in/steven-sande-a4264752/"
          aria-label="See the owner-operator's LinkedIn profile."
        >
          <img
            id="linkedin-logo"
            className={ContactCSS.socialIcon}
            src="/LinkedInLogo.svg"
            alt="the LinkedIn logo"
          />
        </a>
        <a
          id="instagram-link"
          target="_blank"
          href="https://www.instagram.com/interiorecology/"
          aria-label="See Interior Ecology's Instagram profile."
        >
          <img
            id="instagram-logo"
            className={ContactCSS.socialIcon}
            src="/InstaLogo.png"
            alt="the Instagram logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
