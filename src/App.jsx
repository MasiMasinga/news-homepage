import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// Images
import Navbar from "./common/components/Navbar";
import Hero from "./common/components/Hero";
import Articles from "./common/components/Articles";

function App() {
  return (
    <Stack sx={{  width: "100vw", bgcolor: "red" }}>
      <Navbar />
      <Hero />
      <Articles />
    </Stack>
  );
}

export default App;
