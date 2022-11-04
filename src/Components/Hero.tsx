import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import cat from "./cat.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import styled from "styled-components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}));

export default function Hero() {
  return (
    <Grid item xs={12} md={12}>
      <Item>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={6}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ADOPT A PET
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find your self a beautiful pet from a wide variety of
                    sources.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Join Now
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>
              <img src={cat} alt="cat" />
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
}
