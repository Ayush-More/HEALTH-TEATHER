// redux/reducers.js
const initialState = {
  user: {
    fullname: "",
    email: "",
    password: "",
    date: "",
    gender: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
