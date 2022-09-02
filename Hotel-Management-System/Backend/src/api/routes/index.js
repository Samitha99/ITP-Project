import { authonticated } from "../middleware/auth.middleware";

const routesInit = (app, passport) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      successRedirect: "/user",
    }),
    (req, res) => {
      console.log("User authonticated");
    }
  );
  app.get("/test", authonticated, (req, res) => {
    res.send("<h4>user is authenticated</h4>");
  });
};

export { routesInit };
