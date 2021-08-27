// action = {
//   type: '[Auth] login'
//   payload:
// }

const initialState = {
  uid: null,
  name: 'guest',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case '[Auth] Login':
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
