const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.signUpUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const regiUser = await User.register(newUser, password);
    req.login(regiUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", `Welcome, ${req.user.username} To Stay Sphere`);
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "Welcome Back to Stay Sphere");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are Logged Out!");
    res.redirect("/listings");
  });
};
