import { BADGE_DECREMENT, BADGE_INCREMENT } from "../Constants/index";
export function reducer(state = {}, action ) {
   switch(action.type) {
       case 'PROFILE': {
           return `${action.name}   ${action.surname}`
     
       }
   }
}