/* eslint-disable react/prop-types */
import { Stack, Typography, Button, Divider, Box } from "@mui/material";
import { useMemo } from "react";

const PastPrograms = () => {
  const programs = useMemo(
    () => [
      {
        title: "Mentor organizations announced for Google Summer of Code 2024",
        content:
          "Open Source Programs Office, Feb 26, 2024 \n We are thrilled to share that we have 195 open source projects that have been selected for Google Summer of Code (GSoC) 2024! This year we are excited to welcome 30 new organizations for their first year as part of the program. Check out our program site to view the complete list of GSoC 2024 accepted mentoring organizations. Get to know more about each organization on their GSoC program ...",
        link: "#",
      },
      {
        title:
          "Google Summer of Code 2024 Mentor Organization Applications Now Open",
        content:
          "Open Source Programs Office, Feb 26, 2024 \n We are thrilled to share that we have 195 open source projects that have been selected for Google Summer of Code (GSoC) 2024! This year we are excited to welcome 30 new organizations for their first year as part of the program. Check out our program site to view the complete list of GSoC 2024 accepted mentoring organizations. Get to know more about each organization on their GSoC program ...",
        link: "#",
      },
      {
        title: "Mentor organizations announced for Google Summer of Code 2024",
        content:
          "Open Source Programs Office, Feb 26, 2024 \n We are thrilled to share that we have 195 open source projects that have been selected for Google Summer of Code (GSoC) 2024! This year we are excited to welcome 30 new organizations for their first year as part of the program. Check out our program site to view the complete list of GSoC 2024 accepted mentoring organizations. Get to know more about each organization on their GSoC program ...",
        link: "#",
      },
      {
        title: "Mentor organizations announced for Google Summer of Code 2024",
        content:
          "Open Source Programs Office, Feb 26, 2024 \n We are thrilled to share that we have 195 open source projects that have been selected for Google Summer of Code (GSoC) 2024! This year we are excited to welcome 30 new organizations for their first year as part of the program. Check out our program site to view the complete list of GSoC 2024 accepted mentoring organizations. Get to know more about each organization on their GSoC program ...",
        link: "#",
      },
      {
        title:
          "Google Summer of Code 2024 Mentor Organization Applications Now Open",
        content:
          "Open Source Programs Office, Feb 26, 2024 \n We are thrilled to share that we have 195 open source projects that have been selected for Google Summer of Code (GSoC) 2024! This year we are excited to welcome 30 new organizations for their first year as part of the program. Check out our program site to view the complete list of GSoC 2024 accepted mentoring organizations. Get to know more about each organization on their GSoC program ...",
        link: "#",
      },
      {
        title: "Mentor organizations announced for Google Summer of Code 2024",
        content:
          "Open Source Programs Office, Feb 26, 2024 \n We are thrilled to share that we have 195 open source projects that have been selected for Google Summer of Code (GSoC) 2024! This year we are excited to welcome 30 new organizations for their first year as part of the program. Check out our program site to view the complete list of GSoC 2024 accepted mentoring organizations. Get to know more about each organization on their GSoC program ...",
        link: "#",
      },
    ],
    []
  );

  return (
    <Stack
      height={{ xs: "120vh" }}
      justifyContent={{ xs: "space-evenly" }}
      alignItems={"center"}
      backgroundColor={"#1A73E8"}
      p={{ xs: 0, sm: 3 }}
      width={"100%"}
      id="pastPrograms"
    >
      <Typography fontSize={{ xs: "2rem", sm: "4rem" }} color={"white"}>
        Latest News
      </Typography>
      <Box
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column" }}
        maxWidth={{ xs: "85%", sm: "80%", md: "50%" }}
        height={{ xs: "70%" }}
        alignItems={{ xs: "center" }}
        p={3}
        sx={{ backgroundColor: { xs: "white" }, borderRadius: 3 }}
      >
        <Stack sx={{ overflowY: "scroll", height: "100%" }}>
          {programs.map(({ title, content, link }, id) => (
            <NewsItem key={id} title={title} content={content} link={link} />
          ))}
        </Stack>
      </Box>
      <Button
          variant={"filled"}
          sx={{
            my: { xs: 3 },
            width: { xs: "60%", sm: 250 },
            height: { xs: 60, sm: 50 },
            fontSize: { xs: "1rem" },
            fontWeight: "bold",
            border: "1px solid white",
            color: "white",
          }}
        >
          View all news
        </Button>
    </Stack>
  );
};

const NewsItem = ({ title, content, link }) => {
  return (
    <>
    <Stack
      direction={"column"}
      justifyContent={"space-around"}
      alignItems={"start"}
      minHeight={{ xs: 450, sm: 250 }}
      my={{xs: 2, sm: 2}}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography fontSize={{ xs: "1.1rem", sm: "1.2rem" }}>
        {content.substring(0, 250) + "..."}
      </Typography>
      <Typography
        variant="body2"
        color="#296CD3"
        sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
        fontSize={{ xs: "1.1rem" }}
        component={"a"}
        href={link}
        target={"_blank"}
      >
        Read More
      </Typography>
    </Stack>
    <Divider sx={{ border: "1.1px solid gray" }} />
    </>
  );
};

export default PastPrograms;
