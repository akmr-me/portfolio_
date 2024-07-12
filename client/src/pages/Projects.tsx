import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainContainer from "src/components/MainContainer";
import ProjectCards from "src/components/projects/Card";
import { ProjectTypes } from "src/config/types";

type ProjectsProps = {
  projectSlice: ProjectTypes[];
  myClass: "box" | "next";
};

const Projects = ({ projectSlice, myClass }: ProjectsProps) => {
  return (
    <Box
      className={myClass}
      height={{ xs: "auto", sm: "100vh" }}
      position="relative"
      sx={{ scrollSnapAlign: { xs: "none", md: "start" } }}
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Projects
      </Typography>
      <MainContainer
        maxWidth="md"
        // className="project-page"
        id="Projects"
        sx={{
          zIndex: "2",
          flexDirection: "column",
          justifyContent: "center",
          height: { xs: "auto", sm: "inherit" },
          paddingTop: { xs: "10%", sm: "inherit" },
        }}
      >
        {projectSlice.map((item, index) => {
          return <ProjectCards {...{ ...item, index }} key={item.name} />;
        })}
      </MainContainer>
    </Box>
  );
};

export default Projects;
