import Avalibale from "./components/Avalibale";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Selected from "./components/Selected";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto">
        <Avalibale></Avalibale>
        <Selected></Selected>
      </div>
     <div>
        <Footer ></Footer>
        
     </div>
    
    </div>
  );
};

export default App;