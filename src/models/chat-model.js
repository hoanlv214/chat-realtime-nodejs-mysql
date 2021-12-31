const db = require('../config/database-config')
const Error = require('../module/error')

const Chat = function (user) {

}

Chat.checkConversation = (id_user_A, id_user_B) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_conversation WHERE id_user_A = '${id_user_A}' AND Id_user_B = '${id_user_B}' OR id_user_A = '${id_user_B}' AND Id_user_B = '${id_user_A}'`, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    result(err, null);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

Chat.getlastitem = () => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_conversation ORDER BY id DESC LIMIT 1`, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    result(err, null);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

Chat.insertchat = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO tbl_chat SET ?", data, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    result(err, null);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve({ id: res.insertId, ...data });
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

Chat.getchatbyid = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("SELECT * FROM tbl_chat WHERE id = ?", id, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    Error.code1001(res);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

Chat.insertnewconversation = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO tbl_conversation SET ?", data, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    resolve(null);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve({ id: res.insertId, ...data });
                }
            })

        } catch (e) {
            reject(e);
        }
    }));
};

Chat.updataconversation = (id_user_A, id_user_B, list_id_chat) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE tbl_conversation SET list_id_chat='${list_id_chat}' WHERE id_user_A = '${id_user_A}' AND Id_user_B = '${id_user_B}' OR id_user_A = '${id_user_B}' AND Id_user_B = '${id_user_A}'`, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    result(null);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })

        } catch (e) {
            reject(e);
        }
    }));
};

Chat.getListConversationByID = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_conversation  WHERE id_user_A = '${id}' OR Id_user_B = '${id}'`, (err, res) => {
                if (err) {

                    Error.code1001(res);
                } else {
                    //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
Chat.deleteConversation = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM tbl_conversation WHERE id = '${id}'`, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
module.exports = Chat;
