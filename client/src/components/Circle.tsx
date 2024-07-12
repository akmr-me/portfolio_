// import React from "react";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import intro from "src/info/intro";
import "src/components/circle.css";

const Circle = () => {
  const [rotate, setRotate] = useState(-60);
  const [pos, setPos] = useState(261);
  const timerRef = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const debounce = (func: () => void) => {
    let timer: null | number;
    return (...args: any[]) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, args as any);
      }, 500);
    };
  };
  const Resize = () => {
    if (window.innerHeight < 480) {
      setPos(150);
      return;
    }
    if (window.innerWidth < 1024) {
      setPos(225);
    }
    if (window.innerWidth > 1024) {
      setPos(261);
    }
    if (window.innerWidth < 770) {
      setPos(200);
    }
    if (window.innerWidth < 720) {
      setPos(180);
    }
    if (window.innerWidth < 550) {
      setPos(150);
    }
  };
  // eslint-disable-next-line
  const optimaizedFunction = useCallback(debounce(Resize), []);
  const animation = () => {
    setRotate((prev) => {
      if (!ref.current) return prev;
      if (prev === -360) {
        ref.current.style.removeProperty("transform");
        ref.current.style.transitionDuration = "0ms";
        ref.current.style.transform = "rotate(0deg)";
        return 0;
      } else {
        ref.current.style.transform = `rotate(${prev - 60}deg)`;
        ref.current.style.transitionDuration = "700ms";
        return prev - 60;
      }
    });
  };
  useEffect(() => {
    Resize();
    timerRef.current = setInterval(animation, 2000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    window.addEventListener("resize", optimaizedFunction);
    return () => window.removeEventListener("resize", optimaizedFunction);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <div
        className="slider"
        ref={ref}
        style={{
          transitionDuration: "700ms",
          height: `${pos * 2}px`,
          width: `${pos * 2}px`,
          marginTop: " 39px",
        }}
      >
        {intro.map((data, i) => {
          return (
            <div
              className={`item ${Math.abs(rotate) === i * 60 ? "active" : ""}`}
              key={data.item}
              style={{
                transform: `translate(${
                  pos * Math.sin(i * 60 * (Math.PI / 180))
                }px, ${-pos * Math.cos(i * 60 * (Math.PI / 180))}px) rotate(${
                  i * 60
                }deg)`,
                backgroundImage: `url(Icons/${data.image}.svg)`,
              }}
              onMouseOver={() =>
                timerRef.current && clearInterval(timerRef.current)
              }
              onClick={() => {
                timerRef.current && clearInterval(timerRef.current);
                if (ref.current) {
                  ref.current.style.transitionDuration = "700ms";
                  ref.current.style.transform = `rotate(-${i * 60}deg)`;
                }
                setRotate(-i * 60);
              }}
              // onMouseLeave={() => {
              //   clearInterval(timerRef.current);
              //   timerRef.current = setInterval(animation, 2000);
              // }}
            ></div>
          );
        })}
      </div>
      <div className="description">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#fdf5a6",
            fontSize: { xs: "1.5rem", md: "1.75rem", lg: "2.25rem" },
          }}
        >
          {intro[Math.abs(rotate / 60) === 6 ? 0 : Math.abs(rotate / 60)].item}
        </Typography>
        <Typography
          textAlign="justify"
          component="blockquote"
          fontStyle="italic"
          fontSize="1.1rem"
          sx={{
            letterSpacing: "0.06",
            position: "relative",
            lineHeight: { xs: "1.1", sm: "1.25", md: "1.5" },
            fontSize: { xs: "0.90rem", sm: "1rem", md: "1.15rem" },
            "&:after": {
              content: "'\\201C'",
              position: "absolute",
              left: { xs: "-21px", sm: "-24px" },
              top: { xs: "-10px", sm: "-20px" },
              fontSize: { xs: "45px", sm: "52px" },
            },
          }}
        >
          {intro[Math.abs(rotate / 60) === 6 ? 0 : Math.abs(rotate / 60)].desc}
        </Typography>
        <Typography
          textAlign="right"
          component="cite"
          display="block"
          sx={{
            color: "#fdf5a6",
            "&:before": { content: "'\\2014'", marginRight: "10px" },
          }}
        >
          {
            intro[Math.abs(rotate / 60) === 6 ? 0 : Math.abs(rotate / 60)]
              .author
          }
        </Typography>
      </div>
    </div>
  );
};

export default Circle;
