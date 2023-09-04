import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Contact from './pages/contact';
import Projects from "./pages/projects";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div id="page" className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-green-100 p-[50px]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
