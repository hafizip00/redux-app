
const myobj = {
    noC: 10,
    username: ""
}
const reducer = (initial = myobj, action) => {
    switch (action.type) {
        case "INC": return { noC: initial.noC + action.payload.inc, username: "BARA DALAL" }
        case "DEC": return { noC: initial.noC - action.payload.inc, username: "NOPE" }
        default: return initial;
    }
}


export default reducer  