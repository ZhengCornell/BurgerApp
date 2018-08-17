import * as actionTypes from "../actions/actionTypes";
// import * as utilities from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

// const authStart = (state, action) => {
//   return utilities.updateObject(state, { error: null, loading: true });
// };

// const authSuccess = (state, action) => {
//   console.log(action.idToken);
//   return utilities.updateObject(state, {
//     token: action.idToken,
//     userId: action.userId,
//     error: null,
//     loading: false
//   });
// };

// const authFail = (state, action) => {
//   return utilities.updateObject(state, { error: action.error, loading: false });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null
      };

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path //通过payload代入, 从action中
      };
    default:
      return state;
  }
};

export default reducer;
