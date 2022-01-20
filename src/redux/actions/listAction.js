const addList=(payload)=>({
    type: "ADD_LIST",
    payload,
});

const clearList=(payload)=>({
    type: "CLEAR_LIST",
    payload,
});

export {addList,clearList}