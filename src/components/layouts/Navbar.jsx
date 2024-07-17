/* eslint-disable react/prop-types */
import { Stack, Divider, Typography } from "@mui/material";
import { useCallback, useContext, useMemo, useState } from "react";
import { NavLinkContext, SmallScreenDrawerContext } from "../../config/context";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = useMemo(
    () => [
      {
        text: "Home",
        link: "home",
      },
      {
        text: "About",
        link: "about",
      },
      {
        text: "Get Started",
        link: "getStarted",
      },
      {
        text: "How It Works",
        link: "howItWorks",
      },
      {
        text: "Past Programs",
        link: "pastPrograms",
      },
    ],
    []
  );
  return (
    <NavLinkContext.Provider value={{ activeLink, setActiveLink }}>
      <Stack>
        {links.map(({ text, link }, id) => {
          // setActiveLink(link);
          return <NavItem key={id} text={text} link={link} />;
        })}
      </Stack>
    </NavLinkContext.Provider>
  );
};

const NavItem = ({ link, text }) => {
  const { activeLink, setActiveLink } = useContext(NavLinkContext);
  const { setIsDrawerOpen } = useContext(
    SmallScreenDrawerContext
  );

  const setNavLink = useCallback(() => {
    setActiveLink(link);
    setIsDrawerOpen(false);
  }, [link, setActiveLink, setIsDrawerOpen]);
  return (
    <Stack direction={"row"} alignItems={"center"} minHeight={50} spacing={3}>
      <Divider
        sx={{
          height: { xs: 30 },
          border: activeLink == link ? "1px solid #296CD3" : "black",
        }}
        orientation="vertical"
      />
      <Typography
        color={activeLink == link ? "#296CD3" : "black"}
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          fontSize: { xs: "1.2rem", md: "1.4rem" },
        }}
        onClick={setNavLink}
        component={"a"}
        href={`#${link}`}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default Navbar;
