import AboutCSS from "./about.module.css";

function About() {
  return (
    <div id="about" className={AboutCSS.about}>
      <h3 id="owner-operator">Steve Sande</h3>
      <ul id="areas-of-expertise">
        <li>Software Developer</li>
        <li>Ecologist</li>
        <li>Aquarist</li>
      </ul>
    </div>
  );
}

export default About;
