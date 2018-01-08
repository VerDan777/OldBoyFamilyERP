export const reducer1 = (state= [],action) => {
    switch(action.type) {
        case 'FEEDBACK_FRIEND': {
            return [
                {
                    ...state
                }
            ]
        }
        case 'ACTIVITY_FRIEND': {
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