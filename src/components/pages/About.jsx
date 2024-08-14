/* eslint-disable react/prop-types */
import { Stack, Typography, Button, Grid } from "@mui/material";
import { useMemo } from "react";

const About = () => {
  const statsData = useMemo(() => [
    { stat: "20K+", text: "New Contributors" },
    { stat: "116", text: "Countries" },
    { stat: "45M+", text: "Lines of Code" },
    { stat: "850+", text: "Open Source Organizations" },
    { stat: "19K+", text: "Mentors" },
    { stat: "19", text: "Years" },
], []);
  return (
    <Grid
      container
      px={{ xs: 0, sm: 10 }}
      py={{ xs: 0, sm: 5 }}
      width="100%"
      flexDirection={{ xs: "row" }}
      id="about"
    >
      <Grid
        item
        xs={12}
        sm={6}
        py={{ xs: 3 ,sm: 5 }}
        px={{ xs: 3 ,sm: 15 }}
        minHeight={{ xs: 400 }}
        display={"flex"}
        flexDirection={{ xs: "column" }}
        justifyContent={"space-evenly"}
        alignItems={"start"}
        sx={{ backgroundColor: "#1A73E8" }}
      >
        <Typography color="white" fontSize={{ xs: "1.6rem" }} variant="h5">
          What is Google Summer of Code?
        </Typography>
        <Typography color="white" fontSize={{ xs: "0.9rem",sm: "1.1rem" }}>
          Google Summer of Code is a global, online program focused on bringing
          new contributors into open source software development. GSoC
          Contributors work with an open source organization on a 12+ week
          programming project under the guidance of mentors.
        </Typography>
        <Button
          variant={"filled"}
          sx={{
            my: { xs: 3 },
            width: { xs: 150 },
            height: { xs: 45 },
            fontSize: { xs: "1rem" },
            fontWeight: "bold",
            border: "1px solid white",
            color: "white",
          }}
        >
          Learn more
        </Button>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={6}
        minHeight={{ xs: 400 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#464A4D" }}
      >
        {statsData.map(({stat, text}, id) => (
          <Stat key={id} data={stat} text={text} />
        ))}
      </Grid>
    </Grid>
  );
};

const Stat = ({ data, text }) => {
  return (
    <Grid
    item
      xs={6}
      sm={6}
      md={4}
      p={5}
      display={"flex"}
      justifyContent={{ xs: "center", sm: "start"}}
      alignItems={"center"}
    >
      <Stack direction="column" spacing={2}>
        <Typography color="white" fontSize={{ xs: "2.5rem" }}>
          {data}
        </Typography>
        <Typography color="white" fontSize={{ xs: "1.1rem" }}>
          {text}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default About;
