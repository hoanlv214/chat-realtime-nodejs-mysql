
exports.code9992= (res)=> {
    res.send(JSON.stringify({
      code: "9992",
      message: 'Post is not existed'
    }));
}
exports.code9993= (res)=> {
    res.send(JSON.stringify({
      code: "9993",
      message: 'Code verify is incorrect'
    }));
}

exports.code9994=(res)=> {
    res.send(JSON.stringify({
      code: "9994",
      message: 'Node data or end of list data'
    }));
}

exports.code9995=(res)=> {
    res.send(JSON.stringify({
      code: "9995",
      message: 'User is not validated'
    }));
}

exports.code9996=(res)=> {
    res.send(JSON.stringify({
      code: "9996",
      message: 'User existed'
    }));
}

exports.code9997=(res)=> {
    res.send(JSON.stringify({
      code: "9997",
      message: 'Method is invalid'
    }));
}

exports.code9998=(res)=> {
    res.send(JSON.stringify({
      code: "9998",
      message: 'Token is invalid'
    }));
}

exports.code9999=(res)=> {
    res.send(JSON.stringify({
      code: "9999",
      message: 'Exception error'
    }));
}

exports.code1001=(res)=> {
    res.send(JSON.stringify({
      code: "1001",
      message: 'Can not connect to DB'
    }));
}

exports.code1002=(res)=> {
    res.send(JSON.stringify({
      code: "1002",
      message: 'Parameter is not enough'
    }));
}

exports.code1003=(res)=> {
    res.send(JSON.stringify({
      code: "1003",
      message: 'Parameter type is invalid'
    }));
}

exports.code1004=(res)=> {
    res.send(JSON.stringify({
      code: "1004",
      message: 'Parameter value is invalid'
    }));
}

exports.code1005=(res)=> {
    res.send(JSON.stringify({
      code: "1005",
      message: 'Unkown error'
    }));
}

exports.code1006=(res)=> {
    res.send(JSON.stringify({
      code: "1006",
      message: 'File size is too big'
    }));
}

exports.code1007=(res)=> {
    res.send(JSON.stringify({
      code: "1007",
      message: 'Upload File Failed'
    }));
}

exports.code1008=(res)=> {
    res.send(JSON.stringify({
      code: "1008",
      message: 'Maximum number of images'
    }));
}

exports.code1009=(res)=> {
    res.send(JSON.stringify({
      code: "1009",
      message: 'Not access'
    }));
}
exports.code1010=(res)=> {
    res.send(JSON.stringify({
      code: "1010",
      message: 'Action has been done previously by this user'
    }));
}

exports.codeNoNet=(res)=> {
  res.send(JSON.stringify({
    code: "1001",
    message: 'Không thể kết nối Internet'
  }));
}
