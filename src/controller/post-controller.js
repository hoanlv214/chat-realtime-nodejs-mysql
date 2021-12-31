const Error = require('../module/error');
const UserService = require('../services/user-services')
const PostService = require('../services/posts-services')
let addPost = async (req, res) => {
    var token = req.body.token;
    var content = req.body.described;
    console.log(token);
    //  nây undefined có nhxi là ko ko nhân được ý
    //console.log(req.file);

    if (content.length >= 200 || content.length == 0 || token.length == 0 || token == undefined) {
        Error.code1002(res);
    }
    else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {

            let date_ob = new Date();
            let seconds = date_ob.getTime();
            console.log(seconds);

            var url = "/" + "new url" + userCheckToken.id_user;
            var DataNewPost = {
                id_user: userCheckToken.id_user,
                content_post: content,
                url_post: url,
                media: "link media",
                id_list_user_like: "0",
                id_list_user_cm: "0",
                date_create: seconds,
                // token_post: accessToken,
            }
            var newPost = await PostService.addPost(DataNewPost);
            if (newPost.id != null) {
                var data = {
                    "id": newPost.id + "",
                    "url": newPost.url_post,
                }
                res.send(JSON.stringify({
                    Code: "1000",
                    Message: 'OK',
                    Data: data
                }))
            }
        }
        else {
            Error.code9998(res);
        }
    }
}

let getPost = async (req, res) => {
    var id_post = req.body.id_post;
    var token = req.body.token;

    if (token == "" || token == undefined || id_post == null || id_post == undefined || token == null) {
        Error.code1002(res);
    }
    else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {
            var postCheckId = await PostService.checkPostById(id_post, userCheckToken.id_user);
            if (postCheckId !== null) {
                if (postCheckId.id_blocked == "0") {
                    res.send(JSON.stringify({
                        Code: "1000",
                        Message: 'OK',
                        Data: postCheckId,
                    }))
                } else {
                    Error.code9992(res);
                }
            }
            else {
                Error.code9992(res);
            }
        }
        else {
            Error.code9998(res);
        }
    }
}

let getListPost = async (req, res) => {
    var count = req.body.count;
    var token = req.body.token;
    var index = req.body.index;
    var last_id = req.body.last_id;
    var idFirstTbPost = await PostService.getFirstItem();

    if (index - idFirstTbPost.id < 0 || count == '' || index == '' || count == null || index == null || index == undefined) {
        Error.code1004(res);
    }
    else {
        index = index - idFirstTbPost.id;

        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {

            var listPostIndexTo = await PostService.getListPost(index, count);
            var listPost = []
            for (let i = 0; i < listPostIndexTo.length; i++) {
                var postCheckId = await PostService.checkPostById(listPostIndexTo[i].id, userCheckToken.id_user);
                listPost.push(postCheckId);
            }
            var newItem = "0";
            var lastId = last_id;
            if (listPostIndexTo.length != 0) {
                if (listPostIndexTo[listPostIndexTo.length - 1].id - last_id > 0) {
                    newItem = listPostIndexTo[listPostIndexTo.length - 1].id - last_id + "";
                }

                lastId = listPostIndexTo[listPostIndexTo.length - 1].id + "";
            }
            res.send(JSON.stringify({
                code: "1000",
                message: 'OK',
                data: listPost,
                "NewItems": newItem,
                "LastID": lastId,
            }))
        }
        else {
            Error.code9998(res);
        }
    }
}

let getNewItem = async (req, res) => {
    var last_id = req.body.last_id;
    var category_id = req.body.category_id;
    var token = req.body.token;

    console.log(last_id);
    console.log(category_id);

    var idFirstTbPost = await PostService.getFirstItem();

    if (category_id == "" || category_id == null || category_id == undefined) {
        category_id = 0;
    }
    if (last_id == "" || last_id == null || last_id == undefined || last_id - idFirstTbPost.id < 0) {
        Error.code1004(res);
    }
    else {
        last_id = last_id - idFirstTbPost.id;
        var idLastTbPost = await PostService.getLastItem();
        // console.log(idLastTbPost.id);
        var listItemNewID = idLastTbPost.id - last_id;

        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {

            var listPostIndexTo = await PostService.getListPost(last_id, listItemNewID);
            console.log(listPostIndexTo);
            var listPost = []
            for (let i = 0; i < listPostIndexTo.length; i++) {
                var postCheckId = await PostService.checkPostById(listPostIndexTo[i].id, userCheckToken.id_user);
                listPost.push(postCheckId);
            }
            var newItem = "0";
            var listId = last_id + idFirstTbPost.id;
            if (listPostIndexTo.length != 0) {
                newItem = listPostIndexTo[listPostIndexTo.length - 1].id - last_id - idFirstTbPost.id + "";
                listId = listPostIndexTo[listPostIndexTo.length - 1].id + "";
            }
            res.send(JSON.stringify({
                Code: "1000",
                Message: 'OK',
                Data: listPost,
                "NewItems": newItem + "",
                "LastID": listId,
            }))
        }
        else {
            Error.code9998(res);
        }
    }
}

let edit_post = async (req, res) => {
    var token = req.body.token;
    var id_post = req.body.id;
    var described = req.body.described;
    var image = req.body.image;
    if (token == "" || token == undefined || token == null || id_post == undefined || id_post == "" || id_post <= 0 || id_post == null) {
        Error.code1004(res);
    }
    else {
        if (described.length >= 200 || described == "" || described == null || described == undefined || image.length >= 200 || image == undefined || image == null) {
            Error.code1002(res);
        } else {
            var userCheckToken = await UserService.checkUserByToken(token);
            if (userCheckToken !== null) {
                var postCheckId = await PostService.checkPostById(id_post, userCheckToken.id_user);
                if (postCheckId !== null) {
                    if (postCheckId.can_edit != 0) {

                        var upDatePost = await PostService.upDatePost(described, id_post);
                        console.log(upDatePost);
                        if (upDatePost == true) {
                            var newPost = await PostService.checkPostById(id_post);

                            res.send(JSON.stringify({
                                Code: "1000",
                                Message: 'OK',
                                Data: newPost,
                            }))
                        }
                    } else {
                        Error.code1009(res);
                    }
                }
                else {
                    Error.code9992(res);
                }
            }
            else {
                Error.code9998(res);
            }

        }

    }
}

let deletePost = async (req, res) => {

    var id_post = req.body.id;
    var token = req.body.token;
    if (token == "" || token == undefined || token == null || id_post == undefined || id_post == "" || id_post <= 0 || id_post == null) {
        Error.code1004(res);
    }
    else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {
            var postCheckId = await PostService.checkPostById(id_post, userCheckToken.id_user);
            if (postCheckId !== null) {

                if (postCheckId.can_edit != 0) {

                    var postDelete = await PostService.deletePost(id_post);

                    if (postDelete != null) {
                        res.send(JSON.stringify({
                            Code: "1000",
                            Message: 'OK',
                        }))
                    } else {
                        Error.code9999(res);
                    }

                } else {
                    Error.code1009(res);
                }
            }
            else {
                Error.code9992(res);
            }
        }
        else {
            Error.code9998(res);
        }

    }

}

let reportPost = async (req, res) => {
    var token = req.body.token;
    var id_post = req.body.id;
    var subject = req.body.subject;
    var details = req.body.detail;
    console.log(subject);
    if (subject < 0 || details == "" || details == undefined || details == null || token == ""
        || token == undefined || token == null || id_post == undefined || id_post == "" || id_post <= 0 || id_post == null) {
        Error.code1004(res);
    } else {
        var userCheckToken = await UserService.checkUserByToken(token);
        // m cứ log ra thôi
        console.log(userCheckToken);
        if (userCheckToken !== null) {
            var postCheckId = await PostService.checkPostById(id_post, userCheckToken.id_user);
            if (postCheckId !== null) {
                // res.send(JSON.stringify({
                //     Code: "1000",
                //     Message: 'OK',
                //     Data: postCheckId,
                // }));
                var checkPostIsReport = await PostService.checkPostIsreport(id_post);

                console.log(checkPostIsReport);

                if (checkPostIsReport == true) {  // bai viet nay da bi admin duyet la au dam roi
                    Error.code1010(res);
                } else {
                    var checkPostIsUserReport = await PostService.checkPostIsUserReport(id_post, userCheckToken.id_user);
                    console.log(checkPostIsUserReport);
                    if (checkPostIsUserReport == true) {
                        // bài viêt có tồn tại và bị usẻ report rồi
                        Error.code1010(res);
                    } else {
                        // nếu không thì report nó đi     
                        //  
                        console.log("bài viết có tồn tại và chưa bị report")

                        var newDataReport = {
                            id_post: id_post,
                            id_user: userCheckToken.id_user,
                            detail: details,
                        }
                        var addPostReport = await PostService.addPostReport(newDataReport);
                        if (addPostReport != null) {
                            res.send(JSON.stringify({
                                Code: "1000",
                                Message: 'OK',

                            }))

                        }
                        //fuck 


                    } // ddeend đây

                }




                // chọn xong dùng shift kéo đến chỗ muốn bôi đen xong ấn shifttt ví dị ở đây


            } else {
                Error.code9992(res);
            }
        } else {
            Error.code9998(res);
        }
    }
}

let addLike = async (req, res) => {
    var token = req.body.token;
    var id_post = req.body.id;

    if (token == "" || token == undefined || token == null || id_post == undefined || id_post == "" || id_post <= 0 || id_post == null) {
        Error.code1004(res);

    } else {
        var userCheckToken = await UserService.checkUserByToken(token);
        if (userCheckToken !== null) {
            var postCheckId = await PostService.checkPostByIdBase(id_post, userCheckToken.id_user);
            if (postCheckId !== null) {
                if (postCheckId.idblock == "0") {
                    var listIdUserLike = postCheckId.id_list_user_like;
                    var arrayIdUserLike = postCheckId.id_list_user_like.split(",");

                    var checkUserLike = 0;
                    for (let i = 0; i < arrayIdUserLike.length - 1; i++) {
                        if (arrayIdUserLike[i] == userCheckToken.id_user) {
                            arrayIdUserLike.splice(i, 1);
                            checkUserLike = 1;
                        }
                    }
                    if (checkUserLike == 0) {
                        listIdUserLike = listIdUserLike + userCheckToken.id_user + ",";
                    } else {
                        listIdUserLike = arrayIdUserLike.toString();
                    }
                    //  console.log(listIdUserLike);

                    var upDateLike = await PostService.upDateLike(listIdUserLike, id_post);
                    if (upDateLike != null) {
                        var postCheckIdUpDate = await PostService.checkPostByIdBase(id_post, userCheckToken.id_user);
                        res.send(JSON.stringify({
                            Code: "1000",
                            Message: 'OK',
                            Data: postCheckIdUpDate.id_list_user_like.split(",").length - 1,
                        }))
                    } else {
                        Error.code9999(res);
                    }

                } else {
                    Error.code9992(res);
                }
            }
            else {
                Error.code9992(res);
            }
        }
        else {
            Error.code9998(res);
        }

    }
}
module.exports = {
    addPost: addPost,
    getPost: getPost,
    getListPost: getListPost,
    getNewItem: getNewItem,
    edit_post: edit_post,
    deletePost: deletePost,
    reportPost: reportPost,
    addLike: addLike,
}
