const authonticated = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.send("<h4>User is not authenticated</h4>");
  }
};

export { authonticated };
