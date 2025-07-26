export default [
  {
    name: "URL Shortner",
    shortDetail: "Full Stack MERN SPA",
    details:
      "URL Shortner generates a unique Base 58 Short URL. NodeJs server continuously checks if a URL is not used for a long time then it removes it from the Mongo database. Users can save their URLs by logging in. Users also have a limit on the number of URLs they can shorten in a specific period of time. ",
    pic: "url",
    repo: "https://github.com/akmr-me/url-shortner.git",
    demo: "https://www.akmr.me",
  },
  {
    name: "Plug-n-Play Workflow Builder",
    shortDetail: "Custom automation platform",
    details:
      "A visual workflow automation platform that allows users to create, manage, and schedule tasks using a node-based interface. Built with Next.js, FastAPI, PostgreSQL, and LangGraph, this SaaS supports triggers, background scheduling, API/webhook integration, error handling, credential management, and real-time execution.",
    pic: "plugnplay", // update image asset accordingly
    repo: "https://github.com/akmr-me/plugnplay", // change to actual repo if public
    demo: "https://plugnplay.cc/", // change to actual domain
  },
  {
    name: "My Portfolio",
    shortDetail: "",
    details:
      "My Portfolio is built using ReactJs and MUI5. Messaging is done using mailjet API which sends the message back to my email id. To secure my mailjet secret keys from client-side  NodeJs Server as a relay is being used.There is also a restriction on the number of messages that can be sent from one IP Address.",
    pic: "portfolio",
    repo: "https://github.com/akmr-me/portfolio",
    demo: "#intro",
  },
  {
    name: "29 Playing Card Game",
    shortDetail: "",
    details:
      "Played in a group of four people, 29 is a strategic game that tests players' ability to think ahead of time and make the right decision. In this app, a single player can play with the bot. This app is also a PWA and can be installed for a better gaming experience.",
    pic: "29",
    repo: "https://github.com/akmr-me/29",
    demo: "https://game.akmr.me",
  },
];
