import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Circle from "src/components/Circle";

const Intro = () => {
  return (
    <Container
      maxWidth="xl"
      id="intro"
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: { xs: "column", sm: "row" },
        scrollSnapAlign: { xs: "none", md: "start" },
      }}
    >
      <Box
        sx={{
          flex: { xs: 4, sm: 3 },
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Circle />
      </Box>
      <Box sx={{ flex: { xs: 1, sm: 2 } }}>
        <Typography
          textAlign="left"
          variant="h2"
          sx={{
            display: "block",
            fontSize: { xs: "1.75rem", md: "2.75rem", lg: "3.75rem" },
          }}
        >
          Hi,
        </Typography>
        <Typography
          className="intro-name"
          textAlign="left"
          variant="h2"
          sx={{ fontSize: { xs: "1.75rem", md: "2.25rem", lg: "3.25rem" } }}
        >
          I'm Amresh Kumar,
        </Typography>
        <Typography
          textAlign="left"
          variant="h3"
          sx={{
            background: "linear-gradient(#b88746, #fdf5a6)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontSize: { xs: "1rem", md: "2rem", lg: "2.5rem" },
          }}
        >
          A Full-Stack Developer
        </Typography>
      </Box>
    </Container>
  );
};

export default Intro;
