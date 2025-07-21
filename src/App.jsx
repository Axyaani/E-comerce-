import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home  from "./Pages/Home"
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";


function App() {
  return ( 
    <>
    <Routes>
        
      <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/contact" element={<Contact/>} />
      
 
    </Routes>
 

    </>
   );
}

export default App;