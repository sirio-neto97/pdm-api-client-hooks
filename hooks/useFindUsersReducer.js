import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
	data: [],
	error: null,
	loading: true
};

export default function useFindUsersReducer(search) {
	const [state, dispatch] = useReducer(reduce, initialState);

	useEffect(() => {
		async function listUsers() {
			try {
				const response = await axios.get('https://jsonplaceholder.typicode.com/users');
				if (response.data) {
					dispatch({
						type: ACTIONS.SUCCESS,
						payload: response.data
					});
				} else {
					dispatch({
						type: ACTIONS.FAILURE
					});
				}
			} catch (error) {
				dispatch({
					type: ACTIONS.FAILURE
				});
			}
		}

		dispatch({type: ACTIONS.FETCHING});
		listUsers();
	}, []);

	return { state };
}

const reduce = (state, action) => {
	switch (action.type) {
		case ACTIONS.FETCHING:
			return {
				data: [],
				error: null,
				loading: true
			};
		case ACTIONS.SUCCESS:
			return {
				data: action.payload,
				error: null,
				loading: false
			};
		case ACTIONS.FAILURE:
			return {
				data: [],
				error: 'Ocorreu um erro na consulta à API',
				loading: false
			};
		default:
			return state;
	}
}

const ACTIONS = {
	'FETCHING': 'OnFetching',
	'SUCCESS': 'OnSuccess',
	'FAILURE': 'OnFailure'
};