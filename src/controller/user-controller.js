
const Error = require('../module/error')
const UserService = require('../services/user-services')
var jwt = require('jsonwebtoken');

let signup = async (rep, res) => {
    console.log(rep.body);

    var phoneNumber = rep.body.sdt_user;
    var passWord = rep.body.pass_user;

    if (phoneNumber === null || passWord === null || phoneNumber === '' || passWord === '' || phoneNumber === undefined || passWord === undefined) {
        Error.code1002(res);
    }
    else if (phoneNumber.length !== 10 || phoneNumber[0] !== '0' || phoneNumber === passWord || passWord.length > 10 || passWord.length < 6) {
        Error.code1004(res);
    } else {
        var user = await UserService.checkphoneuser(phoneNumber);
        if (user == null) {
            var newDataUser = rep.body;
            var newUser = await UserService.addUser(newDataUser);
            // console.log("loi la");
            // console.log(newUser);
            if (newUser.sdt_user != null) {
                res.send(JSON.stringify({
                    Code: "1000",
                    Message: 'OK',
                    Data: newUser
                }))
            }
        }
        else {
            if (user.sdt_user == phoneNumber) {
                Error.code9996(res);
            }
        }

    }
}
let login = async (rep, res) => {
    var phoneNumber = rep.body.sdt_user;
    var passWord = rep.body.pass_user;
    if (phoneNumber === null || passWord === null || phoneNumber === '' || passWord === '') {
        Error.code1002(res);
    }
    else if (phoneNumber.length !== 10 || phoneNumber[0] !== '0' || phoneNumber === passWord || passWord.length > 10 || passWord.length < 6) {
        console.log(phoneNumber.length);
        Error.code1004(res);
    }
    else {
        var user = await UserService.checkphoneuser(phoneNumber);
        if (user !== null) {
            if (user.sdt_user == phoneNumber) {
                var userCheckPass = await UserService.checkPassUser(phoneNumber, passWord);
                if (userCheckPass !== null) {
                    //if dung tao token va hien dang nhap thanh con
                    const accessToken = jwt.sign({
                        iss: user.pass_user,
                        sub: user.sdt_user,
                        iat: new Date().getTime(),
                        exp: new Date().setDate(new Date().getTime() + 1)
                    }, 'NodejsApiAuthentication')

                    var userUpdateToken = await UserService.updateTokenUser(userCheckPass.id_user, accessToken);
                    if (userUpdateToken != null) {
                        var userUpdate = await UserService.checkphoneuser(phoneNumber);
                        res.send(JSON.stringify({
                            code: "1000",
                            Message: 'ok',
                            Data: userUpdate,
                        }));
                    }
                    //console.log(accessToken);

                } else {
                    Error.code1004(res);
                }

            }
        }
        else {
            Error.code9995(res);
        }
    }
}
let logout = async (rep, res) => {
    var token = rep.body.token;
    var userCheckToken = await UserService.checkUserByToken(token);
    if (token == "" || token == null || token == undefined) {
        Error.code1004(res);

    } else {
        if (userCheckToken != null) {
            var userUpdateToken = await UserService.updateTokenUser(userCheckToken.id_user, "");
            if (userUpdateToken != null) {
                //  var userUpdate = await UserService.checkphoneuser(userCheckToken.sdt_user);
                //   console.log("update token ok");
                //   console.log(userUpdate);
                res.send(JSON.stringify({
                    code: "1000",
                    message: 'ok',
                    // Data: userUpdate,
                }));
            }
        }
        else {
            Error.code9998(res);
        }
    }

}
let setBlockUser = async (req, res) => {
    token = req.body.token;
    userId = req.body.userId;

    type = req.body.type;
    if (userId == undefined || userId == "" || userId == null || userId <= 0 || type < 0 || type > 1 || type == undefined || token == "" || token == undefined || token == null) {
        Error.code1004(res);
    } else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {
            var checkUserId = await UserService.checkiduser(userId);

            console.log("id can block" + userId);
            console.log("id nguoi  block" + userCheckToken.id_user);
            if (checkUserId != undefined && userId != userCheckToken.id_user) {
                var checkUserABlockUserB = await UserService.checkBlockUserAB(userId, userCheckToken.id_user);
                if (checkUserABlockUserB == undefined) {
                    var checkUserBBlockUserA = await UserService.checkBlockUserAB(userCheckToken.id_user, userId);
                    if (checkUserBBlockUserA != undefined) {
                        if (type == 1) {
                            var deleteBlockUser = await UserService.deleteBlockUser(checkUserBBlockUserA.id)
                        } else {
                            Error.code9997(res);
                        }
                    } else {
                        if (type == 0) {
                            var block = {
                                "id_blockA": userCheckToken.id_user,
                                "id_blockB": userId,
                            }
                            var addBlcockUser = await UserService.addBlockUser(block);
                        } else {
                            Error.code9997(res);
                        }
                    }
                    res.send(JSON.stringify({
                        code: "1000",
                        message: 'ok',
                        // Data: userUpdate,
                    }));

                } else {
                    Error.code9997(res);
                }
            }
            else {
                Error.code9995(res);
            }
        }
        else {
            Error.code9998(res);
        }

    }
}
let setBlockDiary = async (req, res) => {

}
let getVerifyCode = async (req, res) => {
    var phoneNumber = req.body.phoneNumber;
    if (phoneNumber === null || phoneNumber === '') {
        Error.code1002(res);
    }
    else if (phoneNumber.length !== 10 || phoneNumber[0] !== '0') {
        console.log(phoneNumber.length);
        Error.code1004(res);
    }
    else {
        var user = await UserService.checkphoneuser(phoneNumber);
        if (user !== null) {
            if (user.sdt_user == phoneNumber) {

                var code = Math.floor(Math.random() * 200) + 1000;
                var dataCodeVrify = {
                    "phomenumber": phoneNumber,
                    "code": code,
                }
                var checkPhoneUserinCodeVrify = await UserService.checkPhoneUserinCodeVrify(phoneNumber);
                //   console.log(checkPhoneUserinCodeVrify);
                if (checkPhoneUserinCodeVrify != null) {
                    var updateCode = await UserService.updateCode(phoneNumber, code);
                    console.log(updateCode)
                } else {
                    var addCodeVrify = await UserService.addCodeVrify(dataCodeVrify);
                    console.log(addCodeVrify)
                }
                res.send(JSON.stringify({
                    code: "1000",
                    message: 'ok',
                    data: code
                }));
            }
        }
        else {
            Error.code9995(res);
        }
    }
}
let checkVerifyCode = async (req, res) => {
    var phoneNumber = req.body.phoneNumber;
    var codeverify = req.body.codeverify;
    if (phoneNumber === null || phoneNumber === '' || codeverify == "") {
        Error.code1002(res);
    }
    else if (phoneNumber.length !== 10 || phoneNumber[0] !== '0' || codeverify.length != 4) {
        console.log(phoneNumber.length);
        Error.code1004(res);
    }
    else {
        var user = await UserService.checkphoneuser(phoneNumber);
        if (user !== null) {
            if (user.sdt_user == phoneNumber) {

                var checkPhoneUserinCodeVrify = await UserService.checkPhoneUserinCodeVrify(phoneNumber);
                console.log(checkPhoneUserinCodeVrify);
                if (checkPhoneUserinCodeVrify != null && checkPhoneUserinCodeVrify.code == codeverify) {
                    var updateCode = await UserService.updateCode(phoneNumber, "");
                    //    console.log(updateCode)
                    var datauser = {
                        "token": user.token,
                        "id": user.id_user,
                        "active": user.isactive,
                    }
                    res.send(JSON.stringify({
                        code: "1000",
                        message: 'ok',
                        data: datauser
                    }));

                } else {
                    //  var addCodeVrify = await UserService.addCodeVrify(dataCodeVrify);
                    //  console.log(addCodeVrify)
                    Error.code1005(res);
                }

            }
        }
        else {
            Error.code9995(res);
        }
    }
}
let changePassword = async (req, res) => {
    var token = req.body.token;
    var passWord = req.body.passWord;

    var newpassWord = req.body.newpassWord;
    if (passWord === null || passWord === '' || newpassWord === null || newpassWord === '') {
        Error.code1002(res);
    }
    else if (passWord.length > 10 || passWord.length < 6 || newpassWord.length > 10 || newpassWord.length < 6) {

        Error.code1004(res);
    }
    else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {

            var userCheckPass = await UserService.checkPassUser(userCheckToken.sdt_user, passWord);
            if (userCheckPass !== null) {

                var result = passWord.localeCompare(newpassWord);
                if (result === 0) {
                    Error.code1004(res);
                } else {
                    var upDatePassWork = await UserService.updatePassWorkUser(userCheckToken.sdt_user, newpassWord)
                    if (upDatePassWork !== null) {
                        res.send(JSON.stringify({
                            code: "1000",
                            message: "ok",
                        }));
                    } else {
                        Error.code9999(res);
                    }

                }

            } else {
                Error.code1004(res);
            }


        }
        else {
            Error.code9998(res);
        }
    }

    // check token
    // check password cua dung
    // check password hop ly khong gan khong dai ko chua ky tu dac biet và same old passeword
    //

}
let setUserInfo = async (req, res) => {
    var token = req.body.token;
    var username = req.body.username;
    var described = req.body.described;
    var avatar = req.body.avatar;
    var address = req.body.address;

    // var cover_image = req.body.cover_image;
    // var link = req.body.link;
    // var city = req.body.city;
    //  var country = req.body.country;
    if (username.length > 40 || described.length > 150 || address === null || address === undefined || avatar == "" || avatar == undefined || token == "" || token == undefined || username == "" || username == undefined || described == "" || described == undefined) {
        Error.code1002(res);
    }
    else {

        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {
            var userUpdateInformation = await UserService.updateInformationUser(username, described, avatar, address, userCheckToken.sdt_user);
            if (userUpdateInformation !== null) {
                var outPut = {
                    "username": username,
                    "avatar": avatar,
                    //"cover_image": "",
                    // "link": "",
                    // "country": "",
                    "address": address
                }
                res.send(JSON.stringify({
                    code: "1000",
                    message: "ok",
                    data: outPut,
                }));
            }
        }
        else {
            Error.code9998(res);
        }
    }

}
let getUserInfor = async (req, res) => {
    var token = req.body.token;
    var id = req.body.id_user;

    if (token == "" || token == undefined || token == undefined
        || id == "" || id == null || id == undefined) {
        Error.code1002(res);
        console.log("loixo")
    }
    else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {
            var userGetInfor = await UserService.getUserInfor(id_user, userCheckToken.id_user);
            if (userGetInfor !== null) {
                var userInfo = {
                    "id": id,
                    "username": username,
                    // "created": "",
                    // "description": "",
                    // "avatar": avatar,
                    // "cover_image": "",
                    // "link": "",
                    // "address": address,
                    // "city": "city",
                    // "country": country,
                    // "listing": "list_friend",
                    // "is_friend": true,
                    // "online": "",
                }
                res.send(JSON.stringify({
                    code: "1000",
                    message: "ok",
                    data: userInfo,
                }));
            }
        }
        else {
            Error.code9998(res);
        }
    }
}
module.exports = {
    signup: signup,
    login: login,
    logout: logout,
    setBlockUser: setBlockUser,
    setBlockDiary: setBlockDiary,
    getVerifyCode: getVerifyCode,
    checkVerifyCode: checkVerifyCode,
    changePassword: changePassword,
    setUserInfo: setUserInfo,
    getUserInfor: getUserInfor,
}