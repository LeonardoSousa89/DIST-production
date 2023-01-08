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


module.exports={ workers }