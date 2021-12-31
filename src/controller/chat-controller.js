const chatservice = require('../services/chat-services');
const userservice = require('../services/user-services')
const Error = require('../module/error')
const usermodel = require('../models/user-model');
const con = require('../config/database-config');
let initIO = (io) => {
    io.on("connection", function (socket) {
        console.log("User connected1111", socket.id);
        socket.on('joinRoom', data => {
            console.log("User connected1111", socket.id);
            //    console.log(data.iduser+data.idfriend);
            socket.join(data.idroom);

        });
        socket.on('on-chat', async (datareq) => {

            var datachat = {
                Id_user_A: datareq.iduser,
                Id_user_B: datareq.idfriend,
                content: datareq.message,
                // create_date: create_date,
            }
            var chat = await chatservice.insertChat(datachat);
            console.log("cho nay true gi");
            console.log(chat);
            if (chat.id != 0) {
                var conversationrep = await chatservice.checkconversation(datareq.iduser, datareq.idfriend);
                if (conversationrep.length != 0) {
                    var dataconversation = {
                        id_user_A: datareq.iduser,
                        Id_user_B: datareq.idfriend,
                        list_id_chat: conversationrep[0].list_id_chat + chat.id + ",",
                        //  create_date	: id_user_A,
                    }
                    if (conversationrep[0].id == datareq.idroom) {
                        var conversation = await chatservice.updataConversation(dataconversation);
                    }
                }
                else {
                    var dataconversation = {
                        id_user_A: datareq.iduser,
                        Id_user_B: datareq.idfriend,
                        list_id_chat: chat.id + ",",
                        //  create_date	: id_user_A,
                    }
                    var conversation = await chatservice.insertnewConversation(dataconversation);
                    console.log(conversation);
                }
            }
            console.log(datareq);
            io.to(datareq.idroom).emit('message', datareq);
        })
    });
}
let chatmain = async (req, res) => {

    var listidfriends = await userservice.listfriendsbyid(req.user.id_user);
    var listuser;
    if (listidfriends == null) {
        listuser = [];
    } else {
        listuser = await userservice.getlistuserbyid(listidfriends);
    }

    //console.log(listfriends);
    // res.render('mainchat.ejs', {
    //     name: req.user.id_user,
    //     listfriends: listuser
    // })
    res.render('chat/chatmain.ejs',{listfriends:listuser,  name: req.user.id_user,});

}

let conversation = async (req, res) => {
    // console.log(req.user.id_user);
    //   console.log(req.query.id);
    //checkiduser
    var listidfriends = await userservice.listfriendsbyid(req.user.id_user);
    var friends = await userservice.checkiduser(req.query.id);
    var listuser = await userservice.getlistuserbyid(listidfriends);
    var conversation = await chatservice.checkconversation(req.user.id_user, req.query.id);
    var idroom;
    var allitemchat;
    if (conversation.length != 0) {

        idroom = conversation[0].id;
        console.log("list id chat muon lay");
        console.log(conversation[0].list_id_chat);
        allitemchat = await chatservice.getallchatbylistid(conversation[0].list_id_chat);
        console.log(allitemchat);
    }
    else {

        var data = await chatservice.getlastitemsql();
        console.log(data)
        allitemchat = [];
        idroom = data.id + 1;
    }
    //console.log(listfriends);
    // res.render('chat2user.ejs', {
    //     iduser: req.user.id_user,
    //     idfriend: req.query.id,
    //     listfriends: listuser,
    //     idroom: idroom,
    //     allitemchat: allitemchat,
    //     friends: friends,
    // })
      res.render('chat/conversation2user.ejs', {
        iduser: req.user.id_user,
        idfriend: req.query.id,
        listfriends: listuser,
        idroom: idroom,
        allitemchat: allitemchat,
        friends: friends,
    })
}
let sendconversation = async (req, res) => {
    console(req.body.msg)
}

let getListConversation = async (req, res) => {
    var token = req.body.token;
    var index = req.body.index;
    var count = req.body.count;
    if (count <= 0 || count == "" || count == undefined || count == null || index < 0 || index == "" || index == undefined || index == null || token == "" || token == undefined || token == null) {
        Error.code1004(res);
    } else {
        var userCheckToken = await userservice.checkUserByToken(token);
        if (userCheckToken !== null) {
            var getListConversation = await chatservice.getListConversationByID(index, count, userCheckToken.id_user);
            //  console.log(getListConversation);
            //console  console.log("vao cho phan get conversation by id roi");
            res.send(JSON.stringify({
                code: "1000",
                message: 'OK',
                data: getListConversation,
                numberNewMessage: "0"
            }))
        }
        else {
            Error.code9998(res);
        }

    }
}
let getconversation = async (req, res) => {

    var token = req.body.token;
    var partnerId = req.body.partnerId;
    var conversationId = req.body.conversation;
    var index = req.body.index;
    var count = req.body.count;
    if (conversationId == "" || conversationId == null || conversationId <= 0 || partnerId == null || partnerId <= 0 || partnerId == "" || count <= 0 || count == "" || count == undefined || count == null || index < 0 || index == "" || index == undefined || index == null || token == "" || token == undefined || token == null) {
        Error.code1004(res);
    } else {
        var userCheckToken = await userservice.checkUserByToken(token);
        if (userCheckToken !== null) {
            var conversation = await chatservice.checkconversation(userCheckToken.id_user, partnerId);
            if (conversation.length != 0) {
                console.log(conversation[0].list_id_chat);
                allitemchat = await chatservice.getallchatbylistidofAPI(index, count, conversation[0].list_id_chat);

                var idblock = "0";
                var checkUserBlockAB = await usermodel.checkUserBlock(partnerId, userCheckToken.id_user);
                if (checkUserBlockAB.length != 0) {
                    if (checkUserBlockAB[0].id != 0) {
                        idblock = "1";
                        iscomment = "0"
                    }
                }
                res.send(JSON.stringify({
                    code: "1000",
                    message: 'OK',
                    data: {
                        allitemchat: allitemchat,
                        "is_blocked": idblock
                    }
                }))

            } else {
                Error.code9994(res);
            }


        }
        else {
            Error.code9998(res);
        }

    }
}
let deletemessage = async (req, res) => {
    var token = req.body.token;
    var partnerId = req.body.partnerId;
    var messageId = req.body.messageId;
    if (messageId == null || messageId <= 0 || messageId == "" || partnerId == null || partnerId <= 0 || partnerId == "" || token == "" || token == undefined || token == null) {
        Error.code1004(res);
    } else {
        var userCheckToken = await userservice.checkUserByToken(token);
        if (userCheckToken !== null) {
            var conversation = await chatservice.checkconversation(userCheckToken.id_user, partnerId);
            if (conversation.length != 0) {
                //  console.log(conversation[0].list_id_chat);
                var listIdChat = conversation[0].list_id_chat.split(',');
                var checkMessage = 0;
                for (let i = 0; i < listIdChat.length; i++) {
                    if (messageId == listIdChat[i]) {
                        listIdChat.splice(i, 1);
                        checkMessage = 1;
                    }
                }
                if (checkMessage == 1) {
                    var dataConVerSation = {
                        "id_user_A": userCheckToken.id_user,
                        "Id_user_B": partnerId,
                        "list_id_chat": listIdChat.toString(),

                    }
                    var upDateComveraation = chatservice.updataConversation(dataConVerSation);
                    if (upDateComveraation.length != 0) {
                        res.send(JSON.stringify({
                            code: "1000",
                            message: 'OK',
                        }))
                    }
                    else {
                        Error.code9999(res);
                    }
                } else {
                    Error.code9994(res);
                }


            } else {
                Error.code9994(res);
            }
        }
        else {
            Error.code9998(res);
        }

    }
}
let deleteConversation = async (req, res) => {
    var token = req.body.token;
    var partnerId = req.body.partnerId;

    if (partnerId == null || partnerId <= 0 || partnerId == "" || token == "" || token == undefined || token == null) {
        Error.code1004(res);
    } else {
        var userCheckToken = await userservice.checkUserByToken(token);
        if (userCheckToken !== null) {
            var conversation = await chatservice.checkconversation(userCheckToken.id_user, partnerId);
            if (conversation.length != 0) {
                //   console.log(conversation)
                var deleleteConversation = await chatservice.deleteConversation(conversation[0].id);
                if (deleleteConversation != null) {
                    res.send(JSON.stringify({
                        code: "1000",
                        message: 'OK',
                    }))
                }
                else {
                    Error.code9999(res);
                }
            } else {
                Error.code9994(res);
            }
        }
        else {
            Error.code9998(res);
        }

    }
}
module.exports = {
    initIO: initIO,
    chatmain: chatmain,
    conversation: conversation,
    sendconversation: sendconversation,
    //  api ơ duoi
    getListConversation: getListConversation,
    getconversation: getconversation,
    deletemessage: deletemessage,
    deleteConversation: deleteConversation,
}