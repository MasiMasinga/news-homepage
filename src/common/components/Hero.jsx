import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Hero = () => {
  return (
    <Stack sx={{ mt: 2 }}>
      <Stack sx={{ mx: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack sx={{ height: "65vh", bgcolor: "blue" }}></Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack sx={{ height: "65vh", bgcolor: "green" }}></Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Hero;
