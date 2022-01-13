export const totalReducer = (state, action) => {
  if (action.type === "add") {
    return Number(state + action.price);
  }
  return Number(state - action.price);
};
