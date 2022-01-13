export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const update = [...state];
      update.splice(update.indexOf(action.product), 1);
      return update;
    default:
      return state;
  }
};
