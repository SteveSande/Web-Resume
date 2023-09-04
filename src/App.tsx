import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  let Component: React.FC;
  switch (window.location.pathname) {
    case "/experience":
      Component = Experience;
      break;
    case "/contact":
      Component = Contact;  
      break;
    case "/projects":
      Component = Projects;
      break;
    default:
      Component = Home;
      break;

  }

  return (
    <div id="page" className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-green-100 p-[50px]"><Component /></main>
      <Footer />
    </div>
  );
}

export default App;
