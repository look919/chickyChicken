import database from '../firebase/firebase';


// SET_BIXES
export const setMenu = (menu) => ({
  type: 'SET_MENU',
  menu
});

export const startSetMenu = () => {
  return (dispatch, getState) => {
    return database.ref(`menu`).once('value').then((snapshot) => {
      const menu = [];

      snapshot.forEach((childSnapshot) => {
        menu.push({
          ...childSnapshot.val()
        });
      });

      dispatch(setMenu(menu));
    });
  };
};
