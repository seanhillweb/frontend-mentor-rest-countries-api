export const ACTIONS = {
  SEARCH_COUNTRIES: "SEARCH_COUNTRIES",
  FILTER_COUNTRIES: "FILTER_COUNTRIES",
};

export function AppReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_COUNTRIES:
      return {
        ...state,
        // todos: [...state.todos, action.payload],
      };
    case ACTIONS.FILTER_COUNTRIES:
      return {
        ...state,
        // todos: state.todos.filter((item) => item.id !== action.payload),
        // activeTodos: state.activeTodos.filter(
        //   (item) => item.id !== action.payload
        // ),
        // completeTodos: state.completeTodos.filter(
        //   (item) => item.id !== action.payload
        // ),
      };
    default:
      return state;
  }
}
