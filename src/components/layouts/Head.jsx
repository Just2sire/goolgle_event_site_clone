import { Grid, Divider, Typography } from "@mui/material";

const Head = () => {
  return (
    <>
      <Grid
        container
        display={"flex"}
        alignContent={"end"}
        my={1}
        spacing={1}
        sx={{
          pl: { xs: 5, sm: 20 },
          justifyContent: "start",
          alignItems: "center",
          height: { xs: 30, sm: 40 },
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          display={"inline-flex"}
          color="black"
        >
          Welcome to our new site!{" "}
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          sx={{
            color: "#1A73E8",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          component={"a"}
        >
          Learn more
        </Typography>
      </Grid>
      <Divider />
    </>
  );
};

export default Head;
