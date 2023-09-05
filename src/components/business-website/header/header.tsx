import HeaderCSS from "./header.module.css";

function Header() {
  return (
    <header id="header" className={HeaderCSS.header}>
      <img
        id="header-logo"
        className={HeaderCSS.logo}
        src="/IntEcoLogo.png"
        alt="the outline of a fish surrounded by bubbles, all in cerulean blue"
      />
      <h1 id="name" className={HeaderCSS.name}>
        Interior Ecology Aquarium Services
      </h1>
      <h2 id="locations" className={HeaderCSS.locations}>
        Serving the cities of Guelph, Kitchener, Waterloo, and Cambridge in
        Ontario, Canada
      </h2>
    </header>
  );
}

export default Header;
