import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

export default function BusinessWebsite() {
  return (
    <div id="page" style={{backgroundColor: '#FFFFFF'}}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}