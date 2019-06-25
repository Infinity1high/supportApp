const passport = require("passport");
const bodyParser = require("body-parser");
const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const callRepository = require("./controllers/calls");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get("/", requireAuth, (req, res) => {
    console.log("init route");
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", urlencodedParser, Authentication.signup);
  app.post("/call_add", urlencodedParser, callRepository.addCall);
  app.get("/calls", callRepository.getCalls);
  app.delete("/calls", callRepository.removeCall);
};
