import { createContext } from "react";
import { RouteType, ShowContextType } from "./types/interface";
import BaseScreen from "./components/BaseScreen/BaseScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import Signup from "./pages/Signup/Signup";

const initialShowContextValue: ShowContextType = {
  setShow: () => {}, // You can provide a default implementation or leave it empty
  show: false, // Provide an initial value for 'show'
};

export const ShowContext = createContext<ShowContextType>(initialShowContextValue); // Export the ShowContext

function App() {
  const ROUTE: Array<RouteType> = [
    {
      path: "/login",
      component: <Login />,
      exact: true,
      isPublic: true,
    },
    {
      path: "/signup",
      component: <Signup/>,
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
     <BaseScreen/>
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
