import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import 'bootstrap/dist/css/bootstrap.min.css';
import logosundar from "./assets/images/Sundar Logo/logo.jpg";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "./context";
import routes from "./routes";
import theme from "./assets/theme";
import themeDark from "./assets/theme-dark";
import Configurator from "./examples/Configurator";
import Sidenav from "./examples/Sidenav";
import MDBox from "./components/MDBox";
import {useSelector} from 'react-redux'
import Basic from "./layouts/authentication/sign-in";
import { AppRoutes } from "./AppRoute/AppRoutes";

export default function App() {
  const [controller, dispatch1] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch1, false);
      setOnMouseEnter(true);
    }
  };
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch1, true);
      setOnMouseEnter(false);
    }
  };
  let userState = useSelector(function (store) {
    return store.user;
});

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch1, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);
  useEffect(() => {}, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {window.localStorage.getItem("userLogin") ? (
        layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? logosundar : logosundar}
              brandName="Sundar Industrial Estate"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            <Routes>
              <Route path="" element={<Navigate to="sale-items" />} />
            </Routes>
          </>
        )
      ) : (
        <>
          <Routes>
            <Route path="" element={<Navigate to="/authentication/sign-in" />} />
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
        </>
      )}

      {window.localStorage.getItem("userLogin") && (
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      )}
    </ThemeProvider>
  );
}
