import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Articles = () => {
  return (
    <Stack sx={{ mt: 1 }}>
      <Stack sx={{ mx: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack sx={{ height: "20vh", bgcolor: "blue" }}></Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack sx={{ height: "20vh", bgcolor: "blue" }}></Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack sx={{ height: "20vh", bgcolor: "blue" }}></Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Articles;
