import { EXEMPLO_DE_REDUX_MANIPULATION } from '../actions/actionType'

export const exampleRedux = value => ({
    type: EXEMPLO_DE_REDUX_MANIPULATION,
    value: value
})