//Importar reducers aqui
import exampleReducer from '../reducers/example';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    //clickExample: clickExample
    exampleReducer: exampleReducer
})