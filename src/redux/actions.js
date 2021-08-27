// action = {
//   type: '[Auth] login'
//   payload:
// }

export const loginAction = (uid, name) => ({
  type: '[Auth] Login',
  payload: {
    uid,
    name,
  },
});

export const loginActionAsync = (uid, name) => {
  return async () => {
    // ...
  };
};
