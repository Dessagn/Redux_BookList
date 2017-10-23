/**
 * state here is not application's state. It is only the state this reducer is responsible for
 *
 * @export
 * @param {any} state  --state concerning this reducer
 * @param {any} action --actions will be pumped to this reducer by the                                  dispatch method
 * @returns
 */
export default function(state=null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}