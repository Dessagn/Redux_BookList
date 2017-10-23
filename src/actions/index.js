//Contains all the different action creators
//selectBook is an ActionCreator and it will return an action
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}