import { useEffect, useState } from "react";
import axios from "axios";

export default function useFindUsers() {
	const [state, setState] = useState({
		loading: true,
		data: [],
		error: null
	});

	useEffect(() => {
		setState({
			loading: true,
			error: null
		});

		listUsers();
	}, []);

	async function listUsers() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			setState({
				loading: false,
				data: response.data || []
			});
		} catch (error) {
			setState({
				loading: false,
				data: [],
				error: 'Ocorreu um erro na consulta à API'
			});
		}
	}

	return { state };
}