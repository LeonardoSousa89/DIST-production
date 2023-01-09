let size=0
let page=0

let pagination={ size, page }

function pageable(req){

    pagination.size=req.query.size
    pagination.page=req.query.page

    if(!size){  
        size=5 
    }
     
    if(page<=0){
         page=1
    }

}

module.exports={  pagination, pageable }