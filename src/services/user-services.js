const usermodel = require('../models/user-model')
const friendService = require('../services/friends-services')
// tuan 1 
let getalluser = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await usermodel.get_all();
            if (data != 0) {
                resolve(data);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let checkphoneuser = (phone) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkPhoneUser(phone);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let addUser = (newDataUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.addUser(newDataUser);
            console.log(user);
            if (user.id != 0) {
                resolve(user);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let checkPassUser = (phoneNumber, passUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkPassUser(phoneNumber, passUser);

            console.log(user);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let updateTokenUser = (idUser, token) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.updateTokenUser(idUser, token);
            // console.log(user);
            if (user.changedRows == 1) {
                resolve(true);
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let checkUserByToken = (token) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkUserByToken(token);
            //  console.log(user);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let checkiduser = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await usermodel.checkuserbyid(id);
            if (data != 0) {
                //     console.log(data[0]);
                resolve(data[0]);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let updatePassWorkUser = (idUser, passWord) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.updatePassWorkUser(idUser, passWord);
            // console.log(user);
            if (user.changedRows == 1) {
                resolve(true);
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let updateInformationUser = (username, described, avatar, address, phone) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.updateInformationUser(username, described, avatar, address, phone);
            // console.log(user);
            if (user.changedRows == 1) {
                resolve(true);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let checkBlockUserAB = (idUserA, idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await usermodel.checkBlockUserAB(idUserA, idUserB);
            if (data != 0) {
                //     console.log(data[0]);
                resolve(data[0]);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));

}
let deleteBlockUser = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let block = await usermodel.deleteBlockUser(id);
            //  console.log("vao den vervices");
            //  console.log(user);
            if (block != null) {
                resolve(true);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let addBlockUser = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.addBlockUser(data);
            //  console.log(user);
            if (user.id != 0) {
                resolve(user);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let addCodeVrify = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            let codephonenumber = await usermodel.addCodeVrify(data);
            //  console.log(user);
            if (codephonenumber.id != 0) {
                resolve(codephonenumber);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let checkPhoneUserinCodeVrify = (phoneNumber) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkPhoneUserinCodeVrify(phoneNumber);
            //  console.log(user);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let updateCode = (phoneNumber, code) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.updateCode(phoneNumber, code);
            // console.log(user);
            if (user.changedRows == 1) {
                resolve(true);
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let getlistuserbyid = (listid) => {
    return new Promise((async (resolve, reject) => {
        try {
            var listuser = [];
            for (let i = 0; i < listid.length; i++) {
                let data = await usermodel.checkuserbyid(listid[i]);
                if (data != 0) {
                    //     console.log(data[0]);
                    listuser.push(data[0]);

                }
                else {
                    resolve(null);
                }
            }

            resolve(listuser);


        } catch (e) {
            reject(e);
        }
    }));
}
let listfriendsbyid = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await usermodel.getlistfriendsbyid(id);
            if (data != 0) {
                //   console.log(data[0]);

                var listfriend = [];
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id_user_a != id) {
                        listfriend.push(data[i].id_user_a);
                    } else {
                        listfriend.push(data[i].id_user_b);
                    }

                }
                console.log(listfriend)
                resolve(listfriend);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let upDateRoleUser = async (idUser, role) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.upDateRoleUser(idUser, role);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let upDateActiveUser = async (idUser, isactive) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.upDateActiveUser(idUser, isactive);
            if (user != null && user != undefined) {

                resolve(true);

            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let deleteUser = async (idUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.deleteUser(idUser);
            //  console.log("vao den vervices");
            //  console.log(user);
            if (user != null) {
                resolve(true);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let adminCheckUser = async (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await usermodel.checkuserbyid(id);
            if (data != 0) {
                //     console.log(data[0]);
                var friendOfUser = await friendService.getlistfriendsbyid(id);

                var user = {
                    "user_id": data[0].id_user + "",
                    "user_name": data[0].name_user,
                    "address": "",
                    "onlline": data[0].online + "",
                    "isActive": data[0].isactive + "",
                    "image": data[0].linkavatar_user,
                    "friend_count": (friendOfUser != null) ? friendOfUser.length : 0 + "",
                    "phonenumber": data[0].sdt_user + "",
                    "email": "",
                }
                resolve(user);

            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let getUserInfor = (username, described, avatar, address, phone) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkUserByToken(id_user)
            console.log(user);
            if (post != null && post != undefined) {
                if (post.length != 0) {
                    // var userInfor = await UserService.checkiduser(id_user);
                    var userInfor = {
                        "id": user.id_user + "",
                        "name": user.name_user,
                        "avatar": user.linkavatar_user
                    }
                    resolve(userInfor);
                }
                else {
                    resolve(null);
                }
            }
        } catch (e) {
            reject(e);
        }
    }));
}
module.exports = {
    getalluser: getalluser,
    checkphoneuser: checkphoneuser,
    checkiduser: checkiduser,
    listfriendsbyid: listfriendsbyid,
    getlistuserbyid: getlistuserbyid,
    addUser: addUser,
    checkPassUser: checkPassUser,
    updateTokenUser: updateTokenUser,
    checkUserByToken: checkUserByToken,
    upDateRoleUser: upDateRoleUser,
    upDateActiveUser: upDateActiveUser,
    deleteUser: deleteUser,
    adminCheckUser: adminCheckUser,
    checkBlockUserAB: checkBlockUserAB,
    deleteBlockUser: deleteBlockUser,
    addBlockUser: addBlockUser,
    addCodeVrify: addCodeVrify,
    checkPhoneUserinCodeVrify: checkPhoneUserinCodeVrify,
    updateCode: updateCode,
    updatePassWorkUser: updatePassWorkUser,
    updateInformationUser: updateInformationUser,
    getUserInfor: getUserInfor,
}