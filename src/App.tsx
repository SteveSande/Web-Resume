import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Contact from './pages/contact';
import Projects from "./pages/projects";
import {Route, Routes} from 'react-router-dom';
import YourDreamDog from "./components/your-dream-dog/your-dream-dog";

function App() {
  return (
    <div id="page" className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-green-100 p-[50px] text-center">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/your-dream-dog' element={<YourDreamDog />} />
          <Route path='/projects/business-website' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
