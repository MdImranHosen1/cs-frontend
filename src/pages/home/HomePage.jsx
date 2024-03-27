import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import dhaka from "../../assets/dhaka1.jpg";

export const HomePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box >
        <img
          src={dhaka}
          alt="Dhaka"
          style={{ width: "100vw", height: "auto" }}
        />
      </Box>
    </React.Fragment>
  );
};
