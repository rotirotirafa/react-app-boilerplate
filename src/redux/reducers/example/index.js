import { EXEMPLO_DE_REDUX_MANIPULATION } from '../../actions'

const inicitalState = {
    value: ''
}

export const exampleReducer = ( state = inicitalState, action) => {
    switch(action.type){
        case EXEMPLO_DE_REDUX_MANIPULATION:
            return {
                ...state,
                value: action.value
            };
        default:
            return state
    }
}