import FooterCSS from "./footer.module.css";
import Contact from "../contact/contact";
import About from "../about/about";

function Footer() {
  return (
    <footer id="footer" className={FooterCSS.footer}>
      <img
        id="footer-logo"
        className={FooterCSS.logo}
        src="/IntEcoLogo.png"
        alt="the outline of a fish surrounded by bubbles, all in cerulean blue"
      />
      <About />
      <Contact />
    </footer>
  );
}

export default Footer;
