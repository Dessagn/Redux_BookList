import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-ActiveBook';

//combineReducers is a function the will combine all our reducers as a state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});
export default rootReducer;