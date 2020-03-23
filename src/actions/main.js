import { SET_CARDS } from 'constants/actionTypes';

const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards
});

export const fetchCards = () => dispatch => {
  (async () => {
    /* You can`t make a request from local files on frontend side.
       I have 2 solutions to this issue: 
          - file 'cards.json' removed to folder 'public'
          - setup server
    */
    const cards = (await import('api/endpoint/cards.json')).default;
    dispatch(setCards(cards))
  })();
};