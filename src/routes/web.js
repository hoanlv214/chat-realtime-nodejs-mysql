const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('../config/passport-config');
const homecontroller = require('../controller/home-controller');
const admincontroller = require('../controller/admin-controller');
const chatcontroller = require('../controller/chat-controller');
const usercontroller = require('../controller/user-controller');
const postcontroller = require('../controller/post-controller');
const commentcontroller = require('../controller/comment-controller');
const friendscontroller = require('../controller/friends-controller');

initializePassport(
  passport
);
let initWebRouter = function (app) {

  var server = require("http").createServer(app);
  const { Server } = require("socket.io")
  const io = new Server(server);
  chatcontroller.initIO(io);

  app.use(flash());
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(methodOverride('_method'))
  const multer = require('multer');
  const upload = multer({
    dest: './upload/images',
  });

  // tuan 1
  app.post('/user/signup', usercontroller.signup);
  app.post('/user/login', usercontroller.login);
  app.post('/user/logout', usercontroller.logout);
  // tuan 2

  app.post('/post/add_post', postcontroller.addPost);
  app.post('/post/get_post', postcontroller.getPost);
  app.post('/post/get_list_posts', postcontroller.getListPost);
  app.post('/post/check_new_item', postcontroller.getNewItem);
  app.post('/post/edit_post', postcontroller.edit_post);
  app.post('/post/delete_post', postcontroller.deletePost);

  // tuan 3
  app.post('/post/report_post', postcontroller.reportPost);
  app.post('/comment/get_comment', commentcontroller.getComment);
  app.post('/comment/add_comment', commentcontroller.addComment);
  app.post('/comment/delete_comment', commentcontroller.deleteComment);
  app.post('/comment/edit_comment', commentcontroller.editComment)
  app.post('/post/like/adlike', postcontroller.addLike);

  // tuan 4 
  app.post('/chat/getlistconversation', chatcontroller.getListConversation);
  app.post('/chat/getconversation', chatcontroller.getconversation);
  app.post('/chat/deletemessage', chatcontroller.deletemessage);
  app.post('/chat/deleteconversation', chatcontroller.deleteConversation);
  app.post('/admin/setrole', admincontroller.setRole);

  // tuan 5
  app.post('/friend/get_user_friends', friendscontroller.getUserFrineds);
  app.post('/admin/setsersate', admincontroller.setSersate);
  app.post('/admin/deleteuser', admincontroller.deleteUser);
  app.post('/admin/getbasicuserinfo', admincontroller.getBasicUserInfo);

  //tuan 6
  app.post('/friend/set_request_friend', friendscontroller.setRquestFriend);
  app.post('/friend/get_requested_friend', friendscontroller.getRquestFriend);
  app.post('/friend/set_accept_friend', friendscontroller.setAcceptFriend);
  app.post('/user/get_user_infor', usercontroller.getUserInfor);
  // cai nay thieu get user infor nay
  // tuan 7
  app.post('/user/setblockuser', usercontroller.setBlockUser);
  app.post('/user/setblockdiary', usercontroller.setBlockDiary);
  app.post('/user/getverifycode', usercontroller.getVerifyCode);
  app.post('/user/checkverifycode', usercontroller.checkVerifyCode);

  // tuan 8
  app.post('/user/changepassword', usercontroller.changePassword);
  app.post('/user/setuserinfo', usercontroller.setUserInfo);


  app.get('/admin/login', checkNotAuthenticatedAdmin, admincontroller.login);
  app.post('/admin/login', checkNotAuthenticatedAdmin, passport.authenticate('local', {
    successRedirect: '/admin/home',
    failureRedirect: '/admin/login',
    failureFlash: true
  }));
  app.get('/admin/home', checkAuthenticatedAdmin, admincontroller.home);
  app.get('/admin/getalluser', checkAuthenticatedAdmin, admincontroller.getAlluser);
  app.get('/admin/use', admincontroller.userdetail);

  app.delete('/logout/admin', (req, res) => {
    req.logOut();
    res.redirect('/admin/login')
  });
  function checkAuthenticatedAdmin(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/admin/login')
  }

  function checkNotAuthenticatedAdmin(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/admin/home')
    }
    next();
  }


  //chat
  app.get('/', checkAuthenticated, chatcontroller.chatmain)
  app.get('/conversation', checkAuthenticated, chatcontroller.conversation)
  app.post('/conversation', checkAuthenticated, chatcontroller.sendconversation)


  // home login
  app.get('/login', checkNotAuthenticated, homecontroller.login)

  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // signup
  app.get('/signup', checkNotAuthenticated, (req, res) => {

    res.render('signup.ejs');
  });

  app.post('/signup', checkNotAuthenticated, async (req, res) => {

    try {

      res.redirect('/login');
    } catch {
      res.redirect('/signup');
    }

  });

  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  });
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/login')
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next();
  }


  var port = 3001;
  server.listen(port, function () {
    console.log("Listening to port " + port);
  });

}
module.exports = {
  initWebRouter: initWebRouter,
}