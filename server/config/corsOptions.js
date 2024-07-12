const whitelist = [
  "http://portfolio.akmr.me",
  "https://portfolio.akmr.me",
  "http://localhost:7001",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
