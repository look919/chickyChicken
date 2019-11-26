// Menu Reducer

const menuReducerDefaultState = [];

export default (state = menuReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return action.menu;
    default:
      return state;
  }
};
