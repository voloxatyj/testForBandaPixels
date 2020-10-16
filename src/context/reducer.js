export const initialState = {
	data: [],
	input: null
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case "GET_DATA":
			return {
				...state,
				data: [...action.payload]
			}
		case "GET_INPUT":
			return {
				...state,
				input: action.payload
			}
		default:
			return state
	}
}

export default reducer