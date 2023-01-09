class Workers{

    constructor( workername, workeremail, workerpost,
                 workeraddress, workerphonenumber, workerage,
                 user_id){
        this.workername=workername
        this.workeremail=workeremail
        this.workerpost=workerpost
        this.workeraddress=workeraddress
        this.workerphonenumber=workerphonenumber
        this.workerage=workerage
        this.user_id=user_id
    } 

}

module.exports={ Workers }