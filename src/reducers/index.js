import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

//combineReducers is a function the will combine all our reducers as a state
const rootReducer = combineReducers({
  books: BooksReducer,
});
export default rootReducer;