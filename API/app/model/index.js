let users=(req)=>{

    let data={
        userid: req.body.userid,
        username: req.body.username,
        email: req.body.email
    }

    return data

}


let workers=(req)=>{

    let data={
        workername: req.body.workername,
        workeremail: req.body.workeremail,
        workerpost: req.body.workerpost,
        workeraddress: req.body.workeraddress,  
        workerphonenumber: req.body.workerphonenumber,
        workerage: req.body.workerage,
        user_id: req.body.user_id 
    }

    return data

}


module.exports={ users, workers }