const { Users } =require('../model/users.js')

let users=(req)=>{

    let data={ ...req.body }

    const user=new Users(data.userid, data.username, data.email)

    return user

}

module.exports={ users }