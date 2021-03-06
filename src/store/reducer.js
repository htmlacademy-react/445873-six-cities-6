import {ActionType} from './actions';
import Offers from '../mocks/offers';
import Comments from '../mocks/comments';
import {Cities, SortOrders} from '../helpers/constants';

const initialState = {
  currentCityName: Cities.PARIS,
  offers: Offers,
  comments: Comments,
  sortOrder: SortOrders.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCityName: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
