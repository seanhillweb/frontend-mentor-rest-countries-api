export const ACTIONS = {
  SEARCH_COUNTRIES: "SEARCH_COUNTRIES",
  REGION_COUNTRIES: "REGION_COUNTRIES",
};

export function AppReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_COUNTRIES:
      return {
        ...state,
      };
    case ACTIONS.REGION_COUNTRIES:
      return {
        ...state,
      };
    default:
      return state;
  }
}
