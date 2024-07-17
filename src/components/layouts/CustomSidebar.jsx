// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Stack, Box, IconButton } from "@mui/material";
import { useCallback, useContext } from "react";
import { Close, Menu } from "@mui/icons-material";
import { CustomDrawerContext } from "../../config/context";
import Navbar from "./Navbar";

const CustomSideBar = () => {
  const { isExtendedDrawer, setIsExtendedDrawer } =
    useContext(CustomDrawerContext);

  const unextendDrawer = useCallback(() => {
    setIsExtendedDrawer(!isExtendedDrawer);
  }, [isExtendedDrawer, setIsExtendedDrawer]);
  
  return (
    <Stack
      display={{ xs: "none", sm: "flex" }}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"start"}
      p={{ xs: 5 }}
      width={{ sm: isExtendedDrawer ? 350 : 100 }}
      height={{ xs: "100vh" }}
      sx={{
        transition: "all 0.4s ease",
        position: "fixed",
        backgroundColor: "white",
        zIndex: 100,
      }}
    >
      <Stack direction="row">
        <Box
          display={{ xs: "flex", sm: "flex" }}
          justifyContent={{ sm: "center" }}
          alignItems={{ sm: isExtendedDrawer ? "start" : "center" }}
          width={{ xs: 100, sm: 100 }}
          >
          <IconButton
            sx={{ transition: "all 3s ease" }}
            onClick={unextendDrawer}
          >
            {isExtendedDrawer ? (
              <Close fontSize="large" sx={{ color: isExtendedDrawer ? "white" : "black", bgcolor: "#296CD3", }} />
            ) : (
              <Menu fontSize="large" sx={{ color: "black" }} />
            )}
          </IconButton>
        </Box>
        <Stack
          display={{ xs: "none", sm: isExtendedDrawer ? "flex" : "none" }}
          width={{ xs: 250, sm: isExtendedDrawer ? 250 : 0 }}
          direction={"column"}
        >
          <Navbar />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CustomSideBar;
