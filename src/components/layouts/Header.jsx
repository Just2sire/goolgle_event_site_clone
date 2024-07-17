import { AppBar, Stack, IconButton, Toolbar } from "@mui/material";
import { useTheme } from "@emotion/react";
import { screenSize } from "../../config/screenSize";
import { Close, Menu, Person } from "@mui/icons-material";
import { useCallback, useContext } from "react";
import { SmallScreenDrawerContext } from "../../config/context";

const Header = () => {
  const theme = useTheme();

  const { isDrawerOpen, setIsDrawerOpen } = useContext(
    SmallScreenDrawerContext
  );

  const unextendDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen, setIsDrawerOpen]);

  return (
    <>
      <AppBar
        elevation={2}
        sx={{
          color: theme.palette.primary.main,
          display: screenSize() == "XS" ? "flex" : "none",
        }}
        position={screenSize() == "XS" ? "fixed" : "static"}
      >
        <Toolbar>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              sx={{ transition: "all 3s ease" }}
              onClick={unextendDrawer}
            >
              {isDrawerOpen ? (
                <Close fontSize="large" sx={{ color: "black" }} />
              ) : (
                <Menu fontSize="large" sx={{ color: "black" }} />
              )}
            </IconButton>
            <Person fontSize="large" sx={{ color: "black" }} />
          </Stack>
        </Toolbar>
      </AppBar>
      {screenSize() == "XS" ? <Toolbar /> : null}
    </>
  );
};

export default Header;
