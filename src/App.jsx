import { CssBaseline, Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import appTheme from "./config/theme";
import {
  CustomDrawerContext,
  SmallScreenDrawerContext,
} from "./config/context";
import Header from "./components/layouts/Header";
// import Sidebar from "./components/layouts/sidebar";
import { useState } from "react";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import HowItsWork from "./components/pages/HowItsWork";
import GetStarted from "./components/pages/GetStarted";
import PastPrograms from "./components/pages/PastPrograms";
import Footer from "./components/layouts/Footer";
import Head from "./components/layouts/Head";
import CustomSideBar from "./components/layouts/CustomSidebar";
import Sidebar from "./components/layouts/sidebar";

const App = () => {
  const [isExtendedDrawer, setIsExtendedDrawer] = useState(false);

  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  return (
    <ThemeProvider theme={appTheme}>
      <CustomDrawerContext.Provider
        value={{ isExtendedDrawer, setIsExtendedDrawer }}
      >
        <SmallScreenDrawerContext.Provider value={{isDrawerOpen, setIsDrawerOpen}} >
          <CssBaseline />
          <Sidebar />
          {/* Use a real drawer for the xs screens */}
          <Stack direction="row">
            <CustomSideBar />
            <Stack
              ml={{ xs: 0, sm: "7%" }}
              width={{ xs: "100%" }}
              direction={"column"}
            >
              <Header />
              <Head />
              <Home />
              <About />
              <HowItsWork />
              <GetStarted />
              <PastPrograms />
              <Footer />
            </Stack>
          </Stack>
        </SmallScreenDrawerContext.Provider>
      </CustomDrawerContext.Provider>
    </ThemeProvider>
  );
};

export default App;
