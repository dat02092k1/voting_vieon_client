import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/Popup";
import { RouteType, ShowContextType } from "./types/interface";
import BaseScreen from "./components/BaseScreen/BaseScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";

export const ShowContext = createContext<ShowContextType>(); // Export the ShowContext

function App() {
  const [show, setShow] = useState(false);
  const ROUTE: Array<RouteType> = [
    {
      path: "/login",
      component: <Login />,
      exact: true,
      isPublic: true,
    },
    {
      path: "/",
      component: <DashBoard />,
      exact: true,
      isPublic: true,
    }
  ]
  return (
    <>
     <BrowserRouter>
     <Routes>
          {ROUTE.map((e, i) => (
            <Route key={i} path={e.path} element={e.component} />
          ))}
        </Routes>
     </BrowserRouter>
       
    </>
  );
}

export default App;
