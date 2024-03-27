import * as React from "react";

import InteractiveCard from "./InteractiveCard";
import { Box, Button, TextField } from "@mui/material";

export const UsersPage = () => {
  const Items = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "30%",
            height: "100%",
            margin: "10px",
          }}
        >
          <Box style={{ width: "30%", position: "fixed" }}>
            <div style={{ margin: "5px", fontWeight: "bold" }}>
              Search users
            </div>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
              <label for="html">System admin</label>
              <br></br>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
              />{" "}
              <label for="css">Landfull manager </label>
              <br></br>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />{" "}
              <label for="javascript">STS manager</label>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Button style={{ width: "100%" }} variant="contained">
                Search
              </Button>
            </div>
          </Box>
          <Box style={{ width: "30%", position: "fixed", top: "300px" }}>
            <div style={{ margin: "5px", fontWeight: "bold" }}>Sort users</div>

            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
              <label for="html">By type</label>
              <br></br>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
              />{" "}
              <label for="css">By name </label>
              <br></br>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />{" "}
              <label for="javascript">By ID</label>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Button style={{ width: "100%" }} variant="contained">
                Sort
              </Button>
            </div>
          </Box>
        </div>

        <div style={{ width: "70%" }}>
          {Items.map((item, index) => (
            <Box>
              <InteractiveCard />
            </Box>
          ))}
        </div>
      </Box>
    </div>
  );
};
