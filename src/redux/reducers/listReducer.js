const initialState = [];
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.payload];
      break;
    case 'CLEAR_LIST':
      return [];
      break;
    default:
      return [...state];
      break;
  }
};

export default listReducer;
