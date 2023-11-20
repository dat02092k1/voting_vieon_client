import { createContext } from "react";
import { RouteType, ShowContextType } from "./types/interface";
import BaseScreen from "./components/BaseScreen/BaseScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import Signup from "./pages/Signup/Signup";
import Admin from "./pages/Admin/Admin";
import { utilFuncs } from "./utils/utils";
import NotFound from "./pages/NotFound/NotFound";
import Users from "./components/Admin/Users/Users";
import Rappers from "./components/Admin/Rappers/Rappers";

const initialShowContextValue: ShowContextType = {
  setShow: () => {},
  show: false,
};

export const ShowContext = createContext<ShowContextType>(
  initialShowContextValue
);

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
      component: <Signup />,
      exact: true,
      isPublic: true,
    },
    {
      path: "/",
      component: <DashBoard />,
      exact: true,
      isPublic: true,
    },
    {
      path: "/admin",
      component: <Admin />,
      exact: true,
      isPublic: false, 
    },
    {
      path: "/admin/users",
      component: <Users />,
      exact: true,
      isPublic: true,
    },
    {
      path: "/admin/rappers",
      component: <Rappers />,
      exact: true,
      isPublic: true,
    },
    {
      path: "/notfound",
      component: <NotFound />,
      exact: true,
      isPublic: true,
    },
  ];

  return (
    <>
      <BrowserRouter>
     
        <Routes>
          {ROUTE.map((e, i) => (
            <Route key={i} path={e.path} element={e.component}/>
          ))}
          <Route path="*" element={<Navigate to="/notfound" />} />
          
        </Routes>
         
      </BrowserRouter>
    </>
  );
}

export default App;
