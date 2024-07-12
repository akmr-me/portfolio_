// import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ProjectTypes } from "src/config/types";

type ProjectCardProps = ProjectTypes & {
  index: number;
};

export default function ProjectCard({
  index,
  details,
  pic,
  name,
  repo,
  demo,
}: ProjectCardProps) {
  return (
    <Card
      className="project-card"
      sx={{
        display: "flex",
        width: { xs: "75%", sm: "100%" },
        height: { xs: "50%", sm: "35%" },
        minWidth: { xs: "380px", sm: "none" },
        flexDirection: {
          xs: "column",
          sm: index % 2 === 0 ? "row" : "row-reverse",
        },
        marginBottom: index % 2 === 0 ? { xs: "10px", sm: "40px" } : "",
      }}
    >
      <Box
        className="project-card-media"
        sx={{
          flex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: {
            xs: "2px 4px",
            sm: index % 2 === 0 ? "0 10px 0 5px" : "0 5px 0 10px",
          },
        }}
      >
        <CardMedia
          component="img"
          loading="lazy"
          sx={{
            height: "95%",
            minWidth: "320px",
            borderTopLeftRadius: index % 2 === 0 ? "4px" : "0px",
            borderBottomLeftRadius: index % 2 === 0 ? "4px" : "0px",
            borderTopRightRadius: index % 2 !== 0 ? "4px" : "0px",
            borderBottomRightRadius: index % 2 !== 0 ? "4px" : "0px",
            boxShadow:
              "rgb(255 255 255 / 20%) 0px 0px 0px 1px inset, rgb(0 255 255 / 90%) 0px 0px 0px 1px",
          }}
          image={`${pic}.gif`}
          alt={`${name} album cover`}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 3 }}>
        <CardContent
          className="project-content"
          sx={{
            flex: "1 0 auto",
            pb: 0,
            ...(index % 2 === 0
              ? { pl: { sm: "0", md: "16px" } }
              : { pr: { sm: "0", md: "16px" } }),
          }}
        >
          <Typography
            className="project-header"
            component="div"
            variant="h5"
            sx={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
            }}
          >
            {name}
          </Typography>
          <Typography
            className="project-details"
            sx={{ textAlign: "justify", fontFamily: "'Raleway', sans-serif" }}
          >
            {details}
          </Typography>
        </CardContent>
        <Box
          className="project-btn"
          sx={{
            display: "flex",
            alignItems: "center",
            pr: 2,
            pl: 2,
            pb: 1,
            justifyContent: {
              xs: "end",
              sm: index % 2 === 0 ? "end" : "start",
            },
          }}
        >
          <Button
            variant="contained"
            color="warning"
            size="small"
            href={repo}
            target="_blank"
            sx={{ mr: 2 }}
          >
            Repo
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            href={demo}
            target={name === "My Portfolio" ? "" : "_blank"}
          >
            Site
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
