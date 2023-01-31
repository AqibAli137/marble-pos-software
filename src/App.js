import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
// import themeRTL from "assets/theme/theme-rtl";
// import themeDarkRTL from "assets/theme-dark/theme-rtl";
// import rtlPlugin from "stylis-plugin-rtl";
// import createCache from "@emotion/cache";
// import createCache from "@emotion/cache";
// import { CacheProvider } from "@emotion/react";
import logosundar from "./assets/images/logos/mastercard.png";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "./context";
import routes from "./routes";
import theme from "./assets/theme";
import themeDark from "./assets/theme-dark";
import Configurator from "./examples/Configurator";
import Sidenav from "./examples/Sidenav";
import MDBox from "./components/MDBox";
// import brandWhite from "assets/images/logo-ct.png";
// import brandDark from "assets/images/logo-ct-dark.png";

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

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
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
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      {
        window.localStorage.getItem('loginUser') ? <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>:
      <Routes>
      {getRoutes(routes)}
     { console.log(window.localStorage.getItem('loginUser'))}
      <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
    </Routes>
      }
      
    </ThemeProvider>
  );
}
