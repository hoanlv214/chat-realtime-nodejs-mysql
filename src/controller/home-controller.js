let login = async (req, res) => {
  res.render('loginchat.ejs');
}
let signup = async (req, res) => {
  res.render('signup.ejs');
}
let logout = async (req, res) => {
  res.render('loginchat.ejs');
}
module.exports = {
  login: login,
  signup: signup,
  logout: logout,
}