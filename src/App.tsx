import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/Popup";
import { ShowContextType } from "./types/interface";

export const ShowContext = createContext<ShowContextType>(); // Export the ShowContext

function App() {
  const [show, setShow] = useState(false);
   
  return (
    <>
      <div className="bg-gradient-to-b from-[#000] to-[#250631] h-full relative w-full font-[Roboto] scrollbar">
        <div className="absolute top-0 left-0 right-0 z-0 h-full w-full">
          <picture>
            <img
              src="https://static2.vieon.vn/voting/static/media/bg-main.49069143a7463377423b.png"
              alt=""
            />
          </picture>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0 h-screen w-full">
        <picture>
          <img
            src="https://static2.vieon.vn/voting/static/media/bg-footer.ccab87c1060d17f3ae62.png"
            alt=""
          />
        </picture>
      </div>

      <ShowContext.Provider value={{show, setShow}}>
      <Header />
      <Popup/> 
      </ShowContext.Provider>
    
      <Main />
      <Footer />
       
    </>
  );
}

export default App;
