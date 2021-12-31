const chatmodel = require("../models/chat-model")
const usermodel = require('../models/user-model')
const UserService = require('../services/user-services')
let checkconversation = (iduser, idfriend) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await chatmodel.checkConversation(iduser, idfriend);
            if (data != 0) {
               // console.log(data[0]);
                resolve(data);
            }
            else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let getlastitemsql = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await chatmodel.getlastitem();
            if (data != 0) {
                //   console.log(data[0]);
                resolve(data[0]);
            }
            else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let insertChat = (datainsert) => {
    return new Promise((async (resolve, reject) => {
        try {
            let repdata = await chatmodel.insertchat(datainsert);
            // console.log(repdata);
            // console.log("sao lai the duoc");
            // console.log(repdata);
            // console.log(repdata);
            // console.log(repdata.id);
            datarep = {
                id: repdata.id,
                Id_user_A: repdata.Id_user_A,
                Id_user_B: repdata.Id_user_B,
                content: repdata.content,
            }
            if (repdata.id = ! null) {

                resolve(datarep);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let insertnewConversation = (dataconversion) => {
    return new Promise((async (resolve, reject) => {
        try {
            let repdata = await chatmodel.insertnewconversation(dataconversion);
            if (repdata.id = !null) {
                //   console.log(data[0]);
                resolve(repdata);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let updataConversation = (dataconversion) => {
    return new Promise((async (resolve, reject) => {
        try {
            let repdata = await chatmodel.updataconversation(dataconversion.id_user_A, dataconversion.Id_user_B, dataconversion.list_id_chat);
            if (repdata.length != 0) {
                console.log(repdata[0]);
                resolve(repdata[0]);
            }
            else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let getallchatbylistid = (listid) => {
    return new Promise((async (resolve, reject) => {
        try {
            var allchat = [];
            var allstidnotphay = listid.split(",");
            console.log("khi cat dau phau");
            console.log(allstidnotphay);
            for (let i = 0; i < allstidnotphay.length - 1; i++) {
                let repdata = await chatmodel.getchatbyid(allstidnotphay[i]);
                if (repdata.length != 0) {
                    //   console.log(data[0]);
                    allchat.push(repdata[0]);
                }
                else {
                    resolve([]);
                }
            }

            console.log(allchat);
            resolve(allchat);
        } catch (e) {            reject(e);
        }
    }));
}
let getListConversationByID = (index,count,idUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            var listConversation = [];

            let data = await chatmodel.getListConversationByID(idUser);

            if (data != 0) {
                var ConVerSationNotBlock = data;
                // console.log(ConVerSationNotBlock)
                if(count>ConVerSationNotBlock.length)
                {
                    count=ConVerSationNotBlock.length;

                }
                if(index>ConVerSationNotBlock.length)
                {
                    index=0;
                }
                for (let i = index-1; i <count; i++) {

                    //     variable = (condition) ? value1: value2;
                    var checkUserBlockAB = await usermodel.checkUserBlock((ConVerSationNotBlock[i].id_user_A != idUser) ? ConVerSationNotBlock[i].id_user_A : ConVerSationNotBlock[i].Id_user_B, idUser);

                    var check = false;
                    if (checkUserBlockAB.length != 0) {
                        if (checkUserBlockAB[0].id != 0) {
                            check = true;
                        }
                    }
                    if (check == false) {
                        var receiver = await UserService.checkiduser((ConVerSationNotBlock[i].id_user_A != idUser) ? ConVerSationNotBlock[i].id_user_A : ConVerSationNotBlock[i].Id_user_B)
                        var userReciver = {
                            "id": receiver.id_user + "",
                            "username": receiver.name_user,
                            "avata": receiver.linkavatar_user,
                        }
                        var arrListIdMessage = ConVerSationNotBlock[i].list_id_chat.split(",");
                        var lastmesssage;
                        let repdata = await chatmodel.getchatbyid(arrListIdMessage[arrListIdMessage.length - 2]);
                        if (repdata.length != 0) {
                            lastmesssage = {
                                "message": repdata[0].content,
                                "created": repdata[0].create_date,
                                "unread": "0",
                            }
                        }
                        var dataConVerSation = {
                            "id": ConVerSationNotBlock[i].id + "",
                            "parner": userReciver,
                            "lastmesssage": lastmesssage
                        }

                        listConversation.push(dataConVerSation);
                    }
                }

                resolve(listConversation);
            }
            else {
                resolve(null);
            }

        } catch (e) {
            reject(e);
        }
    }));
}
let getallchatbylistidofAPI = async (index,count,listid) => {
    return new Promise((async (resolve, reject) => {
        try {
            var allchat = [];
            var allstidnotphay = listid.split(",");
            //   console.log("khi cat dau phau");
            //   console.log(allstidnotphay);
            if(count>allstidnotphay.length - 1)
            {
                count=allstidnotphay.length - 1;

            }
            if(index>allstidnotphay.length - 1)
            {
                index=0;
            }

            for (let i = index-1; i < count; i++) {
                let repdata = await chatmodel.getchatbyid(allstidnotphay[i]);
                if (repdata.length != 0) {
                    console.log(repdata[0]);
                    var receiver = await UserService.checkiduser(repdata[0].Id_user_A);
                    var userReciver = {
                        "id": receiver.id_user + "",
                        "username": receiver.name_user,
                        "avata": receiver.linkavatar_user,
                    }
                    var costomConversation = {
                        "message": repdata[0].content,
                        "message_id": repdata[0].id + "",
                        "uread": "1",
                        "created": repdata[0].create_date,
                        "sender": userReciver,
                    }
                    allchat.push(costomConversation);
                }
                else {
                    resolve([]);
                }
            }

            console.log(allchat);
            resolve(allchat);
        } catch (e) {
            reject(e);
        }
    }));
}
let deleteConversation = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let conversation = await chatmodel.deleteConversation(id);
        
            if (conversation.id != 0) {
                resolve(conversation);
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
    checkconversation: checkconversation,
    getlastitemsql: getlastitemsql,
    insertChat: insertChat,
    insertnewConversation: insertnewConversation,
    updataConversation: updataConversation,
    getallchatbylistid: getallchatbylistid,
    // duoi la phan api
    getListConversationByID: getListConversationByID,
    getallchatbylistidofAPI: getallchatbylistidofAPI,
    deleteConversation:deleteConversation,
}