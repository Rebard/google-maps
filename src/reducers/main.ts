import { Reducer } from 'redux';
import { SET_CARDS } from 'constants/actionTypes';
import { ICard } from 'interfaces';

export interface MainState {
  cards: ICard[]
}

const initialState: MainState = {
  cards: [],
};

const main: Reducer<MainState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS: 
      return {
        ...state,
        cards: action.payload,
      }
    default: return state;
  }
}

export default main;