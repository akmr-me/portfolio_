import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutTable from "src/components/about/Table";
import MyContainer from "src/components/MainContainer";
import Social from "src/components/about/SocialMedia";
import { AlertTypes } from "src/config/types";

type AboutProps = {
  myClass: string;
  setAlert: React.Dispatch<React.SetStateAction<AlertTypes>>;
};

const About = ({ myClass, setAlert }: AboutProps) => {
  return (
    <Box
      className={myClass}
      position="relative"
      height="100vh"
      display="flex"
      alignItems={{ xs: "end", sm: "center" }}
      justifyContent="center"
      id="AboutMe"
      sx={{ scrollSnapAlign: { xs: "none", md: "start" } }}
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        About Me
      </Typography>

      <MyContainer
        maxWidth="md"
        className="about-me-container"
        sx={{
          height: { xs: "92%", sm: "70%" },
          background: "white",
          boxSizing: "border-box",
          padding: "0 !important",
          flexDirection: { xs: "column", sm: "row" },
          margin: { xs: "5px", sm: "inherit" },
          borderRadius: "6px",
        }}
      >
        <Box
          height="100%"
          flex={{ xs: 3, sm: 1 }}
          sx={{
            background: "white",
            color: "black",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: { xs: "6px", sm: "0" },
            borderBottomLeftRadius: { xs: "0", sm: "6px" },
          }}
        >
          <Typography
            variant="body1"
            className="about-me-para"
            sx={{
              padding: "20px 40px",
              fontSize: { sm: "1.40rem", xs: "1.25rem", textAlign: "justify" },
              lineHeight: { sm: "1.5", xs: "1.75rem" },
              // paddingTop: { xs: "12%", sm: "0" },
              paddingRight: "60px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {/* I'm a JavaScript developer. I am capable of working with several
            technologies, including HTML, CSS, JavaScript, NodeJs, React Js,
            MongoDB, etc. A B.E graduate in C.S.E. I'm from Bihar and I
            currently call Bengaluru home. */}
            I am full stack developer with 2 years of experience, I excel in
            HTML, CSS, JavaScript, NodeJs, React Js, and MongoDB. Holding a B.E.
            degree in C.S.E., I quickly progressed to leading a small team
            within 6 months of joining. Additionally, I have expertise in
            deploying applications on VPS.
          </Typography>
        </Box>

        <Box
          className="tilt"
          height="100%"
          flex={{ xs: 4, sm: 1 }}
          sx={{
            background: { xs: "#34495e", sm: "white" },
            color: "black",
            position: "relative",
            width: { xs: "100%", sm: "auto" },
            borderBottomLeftRadius: { xs: "6px", sm: "0" },
            borderBottomRightRadius: { xs: "6px", sm: "0" },
          }}
        >
          <Box
            width="100%"
            height={{ xs: "44%", sm: "50%" }}
            position="relative"
            zIndex="5"
          >
            <Social setAlert={setAlert} />
          </Box>
          <Box
            className="mq410"
            width={{ xs: "80%", sm: "100%" }}
            marginLeft={{ xs: "10%", sm: "initial" }}
            height="50%"
            display="flex"
            alignItems="center"
            position="relative"
            zIndex="5"
          >
            <AboutTable />
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
};

export default About;
