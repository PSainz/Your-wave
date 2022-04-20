import * as actions from '../constants/SpotConstants';

const initialState = {
	spots: [],
	searchResults: [],
	filteredSpots: [],
	page: 1,
};

export const SpotReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_SPOTS:
			return {
				...state,
				loaded: true,
				spots: action.payload.data,
				searchResults: action.payload.data,
				filteredSpots: action.payload.data
			};
            case actions.CREATE_SPOT:
			return {
				spots: [...state.spots, action.payload.data]
			};
		case actions.FILTER_BY_RATING:
			// const filtered = action.payload.filter(spot => spot.rating);
            // console.log(filtered, "filtered");
			return {
				...state,
				spots: action.payload,
				page: 1
			};
		case actions.SEARCH_SPOTS:
			return {
				...state,
				spots: action.payload,
				page: 1
			};
		default:
			return state;
	}
};