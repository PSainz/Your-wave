import * as actions from "../constants/SpotConstants";
import axios from "axios";

export const fetchSpots = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:5500/");
    dispatch({ type: actions.FETCH_SPOTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSpot = (newSpot) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:5500/", newSpot);
    console.log(data, "DATA DEL CREATE");
    dispatch({ type: actions.CREATE_SPOT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchSpots = (query) => (dispatch, getState) => {
  const { SpotReducers } = getState();
  const searchResults = SpotReducers.searchResults.filter((spot) =>
    spot.spot_name.toLowerCase().includes(query.toLowerCase())
  );
  dispatch({ type: actions.SEARCH_SPOTS, payload: searchResults });
};


export const filterByRating = () => (dispatch, getState) => {
	const { SpotReducers } = getState();
	// const 
	dispatch({ type: actions.FILTER_BY_RATING, payload: SpotReducers.spots });
};

// export const sortPostsDesc = () => (dispatch, getState) => {
// 	const { PostReducers } = getState();
// 	dispatch({ type: actions.SORT_POSTS_DESC, payload: PostReducers.posts });
// };
