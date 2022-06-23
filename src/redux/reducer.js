
const myobj = {
    noC : 10,
    username : "DALAL"
}


const reducer = (initial = myobj , action) =>{
    switch(action.type){
        case "INC" : return {noC : initial.noC + 2, username : "BARA DALAL"}

        case "DEC" : return  {noC : initial.noC - 2}

        default : return initial; 
    }
}


export default reducer