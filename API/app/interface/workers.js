const { Workers } =require('../model/workers')

let workers=(req)=>{

    let data={ ...req.body }

    const worker=new Workers(data.workername, data.workeremail, 
                           data.workerpost, data.workeraddress, 
                           data.workerphonenumber, data.workerage,
                           data.user_id)

    return worker

}

module.exports={ workers }

