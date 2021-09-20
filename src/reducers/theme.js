const initialState = {
  theme: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
};
