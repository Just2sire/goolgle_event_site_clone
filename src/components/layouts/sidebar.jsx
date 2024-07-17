import { Close, Menu } from "@mui/icons-material";
import { Drawer, Stack, IconButton, Box } from "@mui/material";
import { useCallback, useContext } from "react";
import { SmallScreenDrawerContext } from "../../config/context";
import Navbar from "./Navbar";

const Sidebar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(
    SmallScreenDrawerContext
  );

  const unextendDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen, setIsDrawerOpen]);

  return (
    <Drawer
      open={isDrawerOpen}
      sx={{ display: { xs: "flex", sm: "none" }, width: "100%" }}
      anchor={"left"}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        py={{ xs: 1 }}
        px={4}
        width={{ xs: 330 }}
        sx={{ transition: "all 0.4s ease" }}
      >
        <Stack direction="row">
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent={{ sm: "center" }}
            alignItems={{ sm: "center" }}
            width={{ sm: 90 }}
          >
            <IconButton
              sx={{ transition: "all 3s ease" }}
              onClick={unextendDrawer}
            >
              {isDrawerOpen ? (
                <Close
                  fontSize="large"
                  sx={{ color: "white", bgcolor: "#296CD3" }}
                />
              ) : (
                <Menu fontSize="large" sx={{ color: "black" }} />
              )}
            </IconButton>
          </Box>
          <Stack
            display={{ xs: isDrawerOpen ? "flex" : "none" }}
            width={{ xs: 270 }}
            mt={{xs: 3}}
            direction={"column"}
          >
            <Navbar />
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
