/* eslint-disable react/prop-types */
import { Box, Stack, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      bgcolor="white"
      display={"flex"}
      flexDirection={"column"}
      py={{ xs: 4, sm: 4 }}
      px={{ xs: 6, sm: 6 }}
      sx={{ width: "100%" }}
      component="footer"
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "space-between", sm: "space-between" }}
        alignItems={{ xs: "center", sm: "start" }}
        spacing={{ xs: 3, sm: 0 }}
      >
        <Box width={{ xs: "100%", sm: "20%" }}>
          <Typography>
            Introducing developers to open source software development
          </Typography>
        </Box>
        <Stack
          width={{ xs: "100%", sm: "30%" }}
          direction={{ xs: "row" }}
          justifyContent={{ xs: "space-between" }}
          spacing={1}
        >
          <Stack p={{ sx: 1, sm: 0 }} spacing={2}>
            <LinkText link={"#"} text="About" />
            <LinkText link={"#"} text="Get Started" />
            <LinkText link={"#"} text="How it works" />
            <LinkText link={"#"} text="Past programs" />
            <LinkText link={"#"} text="2024 program timeline" />
          </Stack>
          <Stack p={{ sx: 1, sm: 0 }} spacing={2}>
            <LinkText link={"#"} text="2024 program" />
            <LinkText link={"#"} text="News" />
            <LinkText link={"#"} text="Help" />
            <LinkText link={"#"} text="GSoc YouTube" />
            <LinkText link={"#"} text="Contact" />
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ border: "1.1px solid gray", my: { xs: 2 } }} />
      <Stack
        direction={{ xs: "row" }}
        // py={{ xs: 1 }}
        spacing={{ xs: 3, sm: 5 }}
        alignItems={"end"}
      >
        <Typography fontSize={{ xs: "1.3rem", sm: "1.5rem" }} color={"gray"}>
          Google
        </Typography>
        <Typography
          color={"gray"}
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
          component={"a"}
          href={"#"}
        >
          Privacy
        </Typography>
        <Typography
          color={"gray"}
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
          component={"a"}
          href={"#"}
        >
          Rules
        </Typography>
        <Typography
          color={"gray"}
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
          component={"a"}
          href={"#"}
        >
          Terms
        </Typography>
      </Stack>
    </Box>
  );
};

const LinkText = ({ text, link, color = "black" }) => {
  return (
    <Typography
      color={color}
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        fontSize: { xs: "1rem", sm: "1.2rem" },
      }}
      component={"a"}
      href={link}
    >
      {text}
    </Typography>
  );
};

export default Footer;
