export const reducer2 = (state= [],action) => {
    switch(action.type) {
        case 'ADD_FRIEND': {
            return [
                {
                    ...state
                }
            ]
        }
        case 'DELETE_FRIEND': {
            return [
                {
                    ...state
                }
            ]
        }
        default: {
            return state;
        }
    }
}