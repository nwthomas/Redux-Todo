import { ADD_TODO } from "../actions";

const initialState = [
  {
    task: "Do laundry",
    id: 798012347890123,
    completed: false
  },
  {
    task: "Walk the dog",
    id: 980713487098711,
    completed: false
  },
  {
    task: "Take a nap",
    id: 123094897987138,
    completed: false
  }
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: {
          task: action.payload,
          id: Date.now(),
          completed: false
        }
      };
    default:
      return state;
  }
}

export default reducer;
