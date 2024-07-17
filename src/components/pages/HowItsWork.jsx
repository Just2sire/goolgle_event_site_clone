/* eslint-disable react/prop-types */
import {
  LightbulbOutlined,
  People,
  PlayCircleOutline,
} from "@mui/icons-material";
import { Stack, Grid, Typography, Button, Divider, Card } from "@mui/material";
import { useMemo } from "react";

const HowItsWork = () => {
  const cardData = useMemo(
    () => [
      {
        icon: <PlayCircleOutline fontSize="large" sx={{ color: "#296CD3" }} />,
        linkText: "Watch video",
        link: "#",
        description: "Want to learn more about Google Summer of Code?",
      },
      {
        icon: <People fontSize="large" sx={{ color: "#1F863E" }} />,
        linkText: "Watch video",
        link: "#",
        description:
          "Open source organizations are ready to welcome new, excited contributors into their communities",
      },
      {
        icon: <LightbulbOutlined fontSize="large" sx={{ color: "#E88100" }} />,
        linkText: "Watch video",
        link: "#",
        description: "Learn how to apply to be a GSoC contributor",
      },
    ],
    []
  );

  return (
    <>
      <Stack
        minHeight={{ xs: "90vh" }}
        width={{ xs: "100%" }}
        direction={{ xs: "column" }}
        justifyContent={"space-between"}
        alignItems={"start"}
        px={{ xs: 3, sm: 20 }}
        py={{ xs: 3, sm: 10 }}
        id="howItWorks"
      >
        <Typography fontSize={{ xs: "2rem", sm: "4rem" }} variant="h5">
          Become a GSoC contributor
        </Typography>
        <Typography fontSize={{ xs: "1rem", sm: "1.3rem" }}>
          Are you new to open source and want to learn more about some
          interesting projects that you can contribute to? Join GSoC where
          mentors will help guide you on your journey!
        </Typography>
        <Typography fontSize={{ xs: "1rem", sm: "1.3rem" }}>
          It is very important to reach out to the organizations that you are
          interested in as soon as possible. The more conversations you have
          with the community before you submit your proposal the better your
          chances of being selected into the GSoC.
        </Typography>
        <Button
          variant={"contained"}
          disabled
          sx={{
            my: { xs: 3 },
            width: { xs: 300, sm: 600 },
            height: { xs: 50, sm: 55 },
            fontSize: { xs: "0.7rem", sm: "0.9rem" },
            fontWeight: "bold",
          }}
        >
          Applications for GSoC contributors open March 18 to April 2
        </Button>
        <Grid
          container
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"start"}
          spacing={{ xs: 2, md: 1 }}
        >
          {cardData.map((card, index) => (
            <CardData
              key={index}
              icon={card.icon}
              description={card.description}
              linkText={card.linkText}
              link={card.link}
            />
          ))}
        </Grid>
      </Stack>
      <Divider />
    </>
  );
};

const CardData = ({ icon, description, linkText, link }) => {
  return (
    <Grid display={"flex"} width={{ xs: "100%" }} item xs={12} sm={4}>
      <Card
        elevation={1}
        display={"flex"}
        sx={{
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          width: { xs: "90%" },
          minHeight: {xs: 230},
          p: 3,
          justifyContent: "space-evenly",
          alignItems: "start",
        }}
      >
        {icon}
        <Typography fontSize={{ xs: "0.9rem",sm: "1.2rem" }} color="black">
          {description}
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ xs: "0.9rem",sm: "1.2rem" }}
          color="#296CD3"
          sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
          component={"a"}
          href={link}
          target={"_blank"}
        >
          {linkText}
        </Typography>
      </Card>
    </Grid>
  );
};

export default HowItsWork;
