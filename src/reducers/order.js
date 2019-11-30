
const orderReducerDefaultState = [];

export default (state = orderReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_ORDER':
        return action.order
    case 'ADD_TO_ORDER':
        return action.order;
    case 'REMOVE_FROM_ORDER':
        return action.order

    default:
      return state;
  }
};
