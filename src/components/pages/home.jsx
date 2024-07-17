import { Stack, Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Stack
      direction={{ xs: "column" }}
      minHeight={{ xs: "90vh", sm: "90vh" }}
      justifyContent={"center"}
      px={{ xs: 5, sm: 10 }}
      py={{ xs: 10, sm: 6 }}
      id="home"
    >
      <Box>
        <Typography fontSize={{ xs: "3rem", sm: "5rem", md: "8rem" }}>
          Mentoring Orgs announced - reach out now!
        </Typography>
      </Box>
      <Button
        variant={"contained"}
        sx={{
          my: { xs: 3 },
          width: { xs: 150 },
          height: { xs: 45 },
          fontSize: { xs: "1rem" },
          fontWeight: "bold",
          backgroundColor: "#1A73E8",
          color: "white",
        }}
      >
        GsOC 2024
      </Button>
    </Stack>
  );
};

export default Home;
