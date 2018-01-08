import { BADGE_DECREMENT, BADGE_INCREMENT } from "../Constants/index";

const initialState = 0;
export function badgeInc(state = initialState, action, value ) {
    switch(action.type) {
        case BADGE_INCREMENT: {
            return {
                ...state,
                value: action.value++
             }
        }
        case BADGE_DECREMENT:{
            return {
                ...state,
                value: action.value--
        }
    }
}
}