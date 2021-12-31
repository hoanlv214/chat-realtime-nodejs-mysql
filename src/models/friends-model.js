const db = require('../config/database-config')
const Error = require('../module/error')

const Friends = function (user) {

}
// friends
Friends.getfriendsbyid = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_friend WHERE id_user_a = '${id}' OR id_user_b = '${id}'`, (err, res) => {
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
Friends.setFriend = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO tbl_friend SET ?", data, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve({ id: res.insertId, ...data });
                }
            })

        } catch (e) {
            reject(e);
        }
    }));
};


//tbl_requested_friend
Friends.setRquestFriend = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO tbl_requested_friend SET ?", data, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve({ id: res.insertId, ...data });
                }
            })

        } catch (e) {
            reject(e);
        }
    }));
};
Friends.checkFriendUserAB = (idUserA, idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_requested_friend WHERE id_user_a = '${idUserA}' AND id_user_b = '${idUserB}' OR id_user_a = '${idUserB}' AND id_user_b = '${idUserA}'`, (err, res) => {
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
}
Friends.deleteQuestFriends = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM tbl_requested_friend WHERE id = '${id}'`, (err, res) => {
                if (err) {
                    console.log('tai sao loi o day');
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
}
Friends.allRequestFriend = (idUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_requested_friend WHERE id_user_A = '${idUser}'`, (err, res) => {
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
Friends.checkSetQuestFriends = (idUserA, idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_requested_friend WHERE id_user_A = '${idUserA}' AND id_user_B = '${idUserB}' OR id_user_A = '${idUserB}' AND id_user_B = '${idUserA}'`, (err, res) => {
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
}
Friends.getrequestedfriendWithUserB = (idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_requested_friend WHERE id_user_B = '${idUserB}'`, (err, res) => {
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
module.exports = Friends;