const postmodel = require('../models/post-model')
const UserService = require('../services/user-services')
const usermodel = require('../models/user-model')

let addPost = async (newDataPost) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.addPost(newDataPost);
            console.log(post);
            if (post.id != 0) {
                resolve(post);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));

}
let checkPostById = async (idPost, idUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.checkPostByid(idPost);
            console.log(post);
            if (post != null && post != undefined) {
                if (post.length != 0) {
                    var userOfPost = await UserService.checkiduser(post[0].id_user);
                    var author = {
                        "id": userOfPost.id_user + "",
                        "name": userOfPost.name_user,
                        "avatar": userOfPost.linkavatar_user
                    }
                    var islike = "chưa like"
                    var arrayidlike = post[0].id_list_user_like.split(",");
                    for (let i = 0; i < arrayidlike.length - 1; i++) {
                        if (idUser == arrayidlike[i]) {
                            islike = "đã like";
                        }
                    }
                    var iscomment = "1"
                    var canedit = "0"
                    if (idUser == userOfPost.id_user) {
                        var canedit = "1"
                    }
                    var idblock = "0";
                    var checkUserBlockAB = await usermodel.checkUserBlock(userOfPost.id_user, idUser);
                    if (checkUserBlockAB.length != 0) {
                        if (checkUserBlockAB[0].id != 0) {
                            idblock = "1";
                            iscomment = "0"
                        }
                    }

                    var datapost = {
                        "id": post[0].id + "",
                        "described": post[0].content_post,
                        "created": post[0].date_create,
                        "modified": "",
                        "like": post[0].id_list_user_like.split(",").length - 1 + "",
                        "comment": post[0].id_list_user_cm.split(",").length - 1 + "",
                        "is_likeed": islike,
                        "image": "url",
                        "video": "url",
                        "author": author,
                        "state": "trang thay bai",
                        "id_blocked": idblock,
                        "can_edit": canedit,
                        "banned ": "",
                        "can_comment": iscomment,
                    }

                    resolve(datapost);
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
let getListPost = async (index, count) => {


    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.checkPostIndexToCount(index, count);
            console.log(post);
            if (post.id != 0) {
                resolve(post);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let getLastItem = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.getLastItem();
            //   console.log(post);
            if (post.length != 0) {
                if (post[0].id != 0) {
                    resolve(post[0]);
                }
                else {
                    resolve(null);
                }
            } else {
                resolve(null);
            }

        } catch (e) {
            reject(e);
        }
    }));
}
let getFirstItem = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.getFirstItem();
            //   console.log(post);
            if (post.length != 0) {
                if (post[0].id != 0) {
                    resolve(post[0]);
                }
                else {
                    resolve(null);
                }
            } else {
                resolve(null);
            }

        } catch (e) {
            reject(e);
        }
    }));
}
let upDatePost = (contenPost, idPost) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.upDatePost(contenPost, idPost);
            console.log(post);
            if (post != null) {
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
let deletePost = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.deletePost(id);
            console.log(post);
            if (post.id != 0) {
                resolve(post);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));

}
let checkPostByIdBase = (idPost, idUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.checkPostByid(idPost);
            console.log(post);
            if (post != null && post != undefined) {
                if (post.length != 0) {
                    var idblock = "0";
                    var checkUserBlockAB = await usermodel.checkUserBlock(post[0].id_user, idUser);
                    if (checkUserBlockAB.length != 0) {
                        if (checkUserBlockAB[0].id != 0) {
                            idblock = "1";
                        }
                    }

                    var datapost = {
                        id: post[0].id,
                        id_user: post[0].id_user,
                        content_post: post[0].content_post,
                        media: post[0].media,
                        id_list_user_cm: post[0].id_list_user_cm,
                        id_list_user_like: post[0].id_list_user_like,
                        date_create: post[0].date_create,
                        url_post: post[0].url_post,
                        idblock: idblock,
                    }

                    resolve(datapost);
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
let UpDateComment = async (listIDComment, idPost) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.UpDateComment(listIDComment, idPost);
            // console.log(post);
            if (post != null) {
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

let upDateLike = async (listIdLike, idPost) => {
    return new Promise((async (resolve, reject) => {
        try {
            let post = await postmodel.upDateLike(listIdLike, idPost);
            // console.log(post);
            if (post != null) {
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

let checkPostIsreport = async (idPost) => {
    return new Promise((async (resolve, reject) => {
        try {

            let postReport = await postmodel.checkPostIsreport(idPost);
            console.log("bài bị report")
            console.log(postReport);
            // cái này nếu khoog cos nó trả về 1 mảng rỗng

            if (postReport != null && postReport != undefined) {
                if (postReport.length != 0) {

                    // cái này giống return trả về true thì có nghĩ là tìm được id post trong cái bản report vừa rồi ủa sao deo zôm dc nhỉ :)) thoi bro nhìn tạm nay vs nó bị cl
                    resolve(true);
                }
                else {
                    resolve(false);
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
let addPostReport = async (newDataPost) => {
    return new Promise((async (resolve, reject) => {
        try {
            let postReport = await postmodel.addPostReport(newDataPost);
            console.log(postReport);
            if (postReport.id != 0) {
                resolve(postReport);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));

}

let checkPostIsUserReport = async (idPost, idUser) => {
    return new Promise((async (resolve, reject) => {
        try {

            let postReport = await postmodel.checkPostIsUserReport(idPost, idUser);
            console.log("bài bị report")
            console.log(postReport);
            // cái này nếu khoog cos nó trả về 1 mảng rỗng

            if (postReport != null && postReport != undefined) {
                if (postReport.length != 0) {

                    // cái này giống return trả về true thì có nghĩ là tìm được id post trong cái bản report vừa rồi ủa sao deo zôm dc nhỉ :)) thoi bro nhìn tạm nay vs nó bị cl
                    resolve(true);
                }
                else {
                    resolve(false);
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
module.exports = {
    addPost: addPost,
    checkPostById: checkPostById,
    getListPost: getListPost,
    getLastItem: getLastItem,
    getFirstItem: getFirstItem,
    upDatePost: upDatePost,
    deletePost: deletePost,
    checkPostByIdBase: checkPostByIdBase,
    UpDateComment: UpDateComment,
    upDateLike: upDateLike,
    checkPostIsreport: checkPostIsreport,
    addPostReport: addPostReport,
    checkPostIsUserReport: checkPostIsUserReport,
}
