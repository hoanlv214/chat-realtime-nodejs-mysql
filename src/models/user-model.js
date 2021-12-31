const db = require('../config/database-config');
const Error = require('../module/error');

const User = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
    this.linkavt = user.linkavt_user;
    this.listidblock = user.list_id_block;
}

User.get_all = () => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("SELECT * FROM user", function (err, user) {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve(user);
                }
            });
        } catch (e) {
            reject(e);
        }
    }));
};

//User
User.checkPhoneUser = (phone) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE sdt_user = ?', phone, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
User.addUser = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO user SET ?", data, (err, res) => {
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
User.checkPassUser = (phoneNumber, pass) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM user WHERE pass_user ='${pass}' AND sdt_user ='${phoneNumber}'`, (err, res) => {
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
User.updateTokenUser = (idUser, token) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET token='${token}' WHERE id_user = '${idUser}'`, (err, res) => {
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
User.checkUserByToken = (token) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE Token = ?', token, (err, res) => {
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
User.upDateRoleUser = (idUser, role) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET role='${role}' WHERE id_user = '${idUser}'`, (err, res) => {
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
User.upDateActiveUser = (idUser, isactive) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET isactive='${isactive}' WHERE id_user = '${idUser}'`, (err, res) => {
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
User.deleteUser = (id) => {
    //console.log(id);

    return new Promise(async (resolve, reject) => {
        try {
            db.query(`DELETE FROM user WHERE id_user = '${id}'`, (err, res) => {
                if (err) {
                    console.log('tai sao loi o day');
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    });
};
User.updatePassWorkUser = (idUser, passWord) => {
    //  console.log(idUser+passWord);
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET pass_user='${passWord}' WHERE sdt_user = '${idUser}'`, (err, res) => {
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
User.updateInformationUser = (username, described, avatar, address, phone) => {

    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET name_user='${username}', described='${described}', linkavatar_user='${avatar}', address='${address}' WHERE sdt_user = '${phone}'`, (err, res) => {
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

User.getUserInfor = (id) => {
    console.log(id)
    return new Promise(async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM user WHERE id_user = '${id}'`, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    });
};
// block
User.deleteBlockUser = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM tbl_blocks WHERE id = '${id}'`, (err, res) => {
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
User.addBlockUser = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO tbl_blocks SET ?", data, (err, res) => {
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
User.checkBlockUserAB = (idUserA, idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_blocks WHERE id_blockA = '${idUserA}' AND id_blockB = '${idUserB}'`, (err, res) => {
                if (err) {
                    resolve(null);
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
User.checkUserBlock = (idUserA, idUserB) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM tbl_blocks WHERE id_blockA = '${idUserA}' AND id_blockB = '${idUserB}' OR id_blockA = '${idUserB}' AND id_blockB = '${idUserA}'`, (err, res) => {
                if (err) {
                    resolve(null);
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

//tbl_codevrify
User.addCodeVrify = (data) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO tbl_codevrify SET ?", data, (err, res) => {
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
User.checkPhoneUserinCodeVrify = (phoneNumber) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM tbl_codevrify WHERE phomenumber = ?', phoneNumber, (err, res) => {
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
}
User.updateCode = (phoneNumber, code) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE tbl_codevrify SET code='${code}' WHERE phomenumber = '${phoneNumber}'`, (err, res) => {
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
}
// day la o phan chat nen hoi ngu//
User.checkuserbyid = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE id_user = ?', id, (err, res) => {
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

// friends
User.getlistfriendsbyid = (id) => {
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

module.exports = User;
