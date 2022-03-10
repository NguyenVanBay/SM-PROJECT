import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import { Grid, Paper } from "@mui/material";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export function Deposits() {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <React.Fragment>
          <Title>Recent Deposits</Title>
          <Typography component="p" variant="h4">
            $3,024.00
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            on 15 March, 2019
          </Typography>
          <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link>
          </div>
        </React.Fragment>
      </Paper>
    </Grid>
  );
}
