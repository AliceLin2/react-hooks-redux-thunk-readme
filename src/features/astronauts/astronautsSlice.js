// Action Creators
export function fetchAstronauts() {
  return function (dispatch) {
    dispatch({type: "astronauts/astronautsLoading"})
    fetch("http://api.open-notify.org/astros.json")
    .then(r=>r.json())
    .then(astronauts=>
      dispatch({
        type: "astronauts/astronautsLoaded",
        payload: astronauts,
      }))
 };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading"
      }
    default:
      return state;
  }
}
