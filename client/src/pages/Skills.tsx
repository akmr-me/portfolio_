import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Card from "src/components/skills/Card";
import MyContainer from "src/components/MainContainer";
import skills from "src/info/skills";

type SkillsProps = {
  myClass: "next" | "box";
};

const Skills = ({ myClass }: SkillsProps) => {
  const [hover, setHover] = useState(false);

  // const handleHover = (e) => {
  //   setHover(true);
  // };
  return (
    <Box
      className={myClass + " Skill-wrapper"}
      height={{ xs: "auto", sm: "100vh" }}
      position="relative"
      sx={{ scrollSnapAlign: { xs: "none", md: "start" } }}
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Skills
      </Typography>
      <MyContainer
        maxWidth="md"
        id="Skills"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "space-between" },
          height: { xs: "auto", sm: "100vh" },
        }}
      >
        {skills.map((skill, i) => {
          return (
            <Card
              key={i}
              header={skill.header}
              logo={skill.logo}
              content={skill.content}
              setHover={setHover}
              hover={hover}
            />
          );
        })}
      </MyContainer>
    </Box>
  );
};

export default Skills;
