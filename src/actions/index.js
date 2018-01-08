import {
    BADGE_DECREMENT,
    BADGE_INCREMENT
} from '../Constants';

export const action = (value) => {
    return {
        type: 'ADD_FRIEND',
        value: value
    }
}
export const actionInput = () => {
    return {
        type: 'ENTER_INPUT',
        value: 1
    }
}

export const badgeIncrement = () => {
    return {
        type: BADGE_INCREMENT
    }
}
export const badgeDecrement = () => {
    return {
        type: BADGE_DECREMENT
    }
}
export const Profile1 = (name, surname) => {
    return {
        type: 'PROFILE',
        name,
        surname
    }
}