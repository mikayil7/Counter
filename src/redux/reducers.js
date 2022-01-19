
const initialState = 0;

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INC_NUM":
      return state + 1;
      break;
    case "SET_DEC_NUM":
      return state - 1;
      break;
    default:
      return state;
      break;
  }
};

export default numberReducer;
