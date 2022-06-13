import {createStore} from 'redux';
import { tokenReducer } from '../store/tokens/TokensReducer';

const store = createStore(tokenReducer);

export default store;