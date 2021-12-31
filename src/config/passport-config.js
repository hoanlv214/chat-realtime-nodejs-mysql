const LocalStrategy = require('passport-local').Strategy
//const bcrypt = require('bcrypt')1
const UserService  = require('../services/user-services')

function initialize(passport) {
  const authenticateUser = async (phoneuser, password, done) => {
    console.log(password);
    const user = await UserService.checkphoneuser(phoneuser);
//  console.log(user);
    if (user == null) {
      return done(null, false, { message: 'Người dùng không tồn tại' })
    }

    try {
      // check password
      console.log(password);
      console.log(user.pass_user);
      if (password==user.pass_user) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Mật khẩu sai'})
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'phoneuser' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id_user))
  passport.deserializeUser(async(id, done) => {
    var user= await UserService.checkiduser(id);
    return done(null,user)
  })
}

module.exports = initialize