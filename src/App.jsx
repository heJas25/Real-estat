import Header from "./comp/Hero/Header/Header";
import Hero from "./comp/Hero/Hero"
import Companies from "./comp/Hero/companies/companies";
import Residancies from "./comp/Residancies/Residancies";
import Value from "./comp/Value/Value";
import Contact from "./comp/Contact/Contact";
import GetStarted from "./comp/Hero/Companies/GetStarted/GetStarted";
 import "./App.css";
import Footer from "./comp/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header></Header>
        <Hero></Hero>

      </div>
      <Companies></Companies>
      
      <Residancies></Residancies>
      <Value></Value>
      <Contact></Contact>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App;
