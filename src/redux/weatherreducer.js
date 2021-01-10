const initialState = {
    list:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case 'ADD':
        return { list:[...state.list,payload] }
    case 'DELETE':
        let items=[...state.list];
        let newitem=items.filter((value,index)=>{
            if (payload!==index) return value
        })
        console.log(newitem)
        return {list:[...newitem]}
    // eslint-disable-next-line no-fallthrough
    default:
        return state
    }
}
