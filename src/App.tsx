import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div id="page" className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-green-100 p-[50px]">main</main>
      <Footer />
    </div>
  );
}

export default App;
