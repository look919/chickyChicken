import database from '../firebase/firebase';


export const setOrder = (order) => ({
  type: 'SET_ORDER',
  order
});

// export const startSetOrder = () => {
//   return (dispatch, getState) => {
//     return database.ref(`menu`).once('value').then((snapshot) => {
//       const menu = [];

//       snapshot.forEach((childSnapshot) => {
//         menu.push({
//           ...childSnapshot.val()
//         });
//       });

//       dispatch(setMenu(menu));
//     });
//   };
// };
