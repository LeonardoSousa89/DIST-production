let users=(req)=>{

    let data={
        userid: req.body.userid,
        username: req.body.username,
        email: req.body.email
    }

    return data

}




module.exports={ users }