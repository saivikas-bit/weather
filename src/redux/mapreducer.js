 const initialState = {
    mapcoordinates:{lat:'10.819792095020272',lng:'106.64620272361894'}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET':
        return { mapcoordinates:{...payload} }

    default:
        return state
    }
}
