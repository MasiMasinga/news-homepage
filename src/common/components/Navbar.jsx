import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

// Images
import Logo from "../../assets/images/logo.svg";

// Utils
import { Colors } from "../utils/constants";

const Navbar = () => {
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      sx={{ mt: 2, mx: 2, p: 2 }}
    >
      <Stack>
        <Link href="/">
          <CardMedia
            component="img"
            image={Logo}
            alt="Logo"
            sx={{ cursor: "pointer" }}
          />
        </Link>
      </Stack>
      <Stack>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              sx={{
                "&:focus": {
                  outline: "none",
                  border: "none",
                },
                ":hover": {
                  color: Colors.orange,
                },
                color: Colors.veryDarkBlue,
                textTransform: "none",
              }}
            >
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                "&:focus": {
                  outline: "none",
                  border: "none",
                },
                ":hover": {
                  color: Colors.orange,
                },
                color: Colors.veryDarkBlue,
                textTransform: "none",
              }}
            >
              New
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                "&:focus": {
                  outline: "none",
                  border: "none",
                },
                ":hover": {
                  color: Colors.orange,
                },
                color: Colors.veryDarkBlue,
                textTransform: "none",
              }}
            >
              Popular
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                "&:focus": {
                  outline: "none",
                  border: "none",
                },
                ":hover": {
                  color: Colors.orange,
                },
                color: Colors.veryDarkBlue,
                textTransform: "none",
              }}
            >
              Trending
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                "&:focus": {
                  outline: "none",
                  border: "none",
                },
                ":hover": {
                  color: Colors.orange,
                },
                color: Colors.veryDarkBlue,
                textTransform: "none",
              }}
            >
              Categories
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Navbar;
