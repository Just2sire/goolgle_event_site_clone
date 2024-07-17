import {
  DescriptionOutlined,
  PlayCircleOutline,
} from "@mui/icons-material";
import { Stack, Grid, Typography, Button, Divider, Box } from "@mui/material";

const GetStarted = () => {
  return (
    <>
    <Stack
      px={{ xs: 3 ,sm: 20 }}
      py={{ xs: 3 ,sm: 4 }}
      pt={{sm: 10}}
      justifyContent={{ xs: "space-evenly", sm: "space-evenly" }}
      minHeight={{ xs: "100vh" }}
      id="getStarted"
    >
      <Typography fontSize={{ xs: "1.6rem" ,sm: "4rem" }} variant="h5">
        Open source organizations
      </Typography>
      <Typography fontSize={{ xs: "0.9rem", sm: "1.3rem" }}>
        It is very important to reach out to the organizations that you are
        interested in as soon as possible. The more conversations you have with
        the community before you submit your proposal the better your chances of
        being selected into the GSoC.
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} py={3}>
          <Typography fontSize={{ xs: "1.1rem", sm: "1.6rem" }} mb={2}>
            Learn why your organization should participate in GSoC
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              //   variant="h6"
              color="#296CD3"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
              component={"a"}
              href={"#"}
              target={"_blank"}
            >
              <PlayCircleOutline
                fontSize="small"
                sx={{ color: "#296CD3", mr: 1 }}
              />
              Watch Video
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} py={3}>
          <Typography fontSize={{ xs: "1.1rem", sm: "1.6rem" }} mb={2}>
            Interested in being a GSoC Mentor?
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              //   variant="h6"
              color="#296CD3"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
              component={"a"}
              href={"#"}
              target={"_blank"}
            >
              <PlayCircleOutline
                fontSize="small"
                sx={{ color: "#296CD3", mr: 1 }}
              />
              Watch Video
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              //   variant="h6"
              color="#296CD3"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
              component={"a"}
              href={"#"}
              target={"_blank"}
            >
              <DescriptionOutlined
                fontSize="small"
                sx={{ color: "#296CD3", mr: 1 }}
              />
              Watch Video
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          elevation: 0,
          height: { xs: 45, sm: 45 },
          width: { xs: "100%", sm: 350 },
          backgroundColor: "#FFFFFF",
          fontSize: { xs: "0.9rem", sm: "1.1rem" },
          color: "black",
          ":hover": { backgroundColor: "#FFFFFF" },
        }}
      >
        Browse all 2024 organisations
      </Button>
    </Stack>
    <Divider />
    </>
  );
};

export default GetStarted;
