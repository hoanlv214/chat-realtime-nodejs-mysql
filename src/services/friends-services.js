const friendsModel = require('../models/friends-model');

let  getlistfriendsbyid=async(id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await friendsModel.getfriendsbyid(id);
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
let setRquestFriend=async (newDataRequestFriend)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let  requestFriend = await friendsModel.setRquestFriend(newDataRequestFriend);
            console.log(requestFriend);
            if (requestFriend.id != 0) {
                resolve(requestFriend);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    })); 
}
let allRequestFriend= async(idUser)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let  allRequestFriend = await friendsModel.allRequestFriend(idUser);
          // console.log(requestFriend);
            if (allRequestFriend !=null) {
                resolve(allRequestFriend);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    })); 
}
let checkSetQuestFriends= async (idUserA,idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            let  allRequestFriend = await friendsModel.checkSetQuestFriends(idUserA,idUserB);

          // console.log(allRequestFriend);
            if (allRequestFriend !=null) {
                resolve(allRequestFriend[0]);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    })); 
}
let checkFriendUserAB= async (idUserA,idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            let friedUser = await friendsModel.checkFriendUserAB(idUserA,idUserB);

           console.log(friedUser);
            if (friedUser !=null) {
                resolve(friedUser[0]);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    })); 
}
let deleteQuestFriends= async (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let friendsquest = await friendsModel.deleteQuestFriends(id);
          //  console.log("vao den vervices");
          //  console.log(user);
            if (friendsquest!=null) {
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
let getrequestedfriendWithUserB= async (idUserB)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let  allRequestFriend = await friendsModel.getrequestedfriendWithUserB(idUserB);
          // console.log(requestFriend);
            if (allRequestFriend !=null) {
                var listIdUserA = [];
                for(let i=0; i<allRequestFriend.length; i++) {
                    listIdUserA.push(allRequestFriend[i].id_user_A)
                }
                resolve(listIdUserA);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    })); 
}

let setFriend=async (newDataFriend)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let  Friend = await friendsModel.setFriend(newDataFriend);
           
            if (Friend.id != 0) {
                resolve(Friend);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    })); 
}
module.exports = {
    getlistfriendsbyid: getlistfriendsbyid,
    setRquestFriend:setRquestFriend,
    allRequestFriend:allRequestFriend,
    checkSetQuestFriends:checkSetQuestFriends,
    checkFriendUserAB:checkFriendUserAB,
    deleteQuestFriends:deleteQuestFriends,
    getrequestedfriendWithUserB:getrequestedfriendWithUserB,
    setFriend:setFriend,
}