import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const usePost = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);

	const postData = async (pTitle, pBody) => {
		setError(undefined);
		var response;
		try {
			response = await axios.post(`${baseUrl}/posts`, {
				userID: 4,
				title: pTitle,
				body: pBody,
			});
			setData(response.data);

			//wfhekhekg <-- why is this here?
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setLoading(false);
		}

		return response.data;
	};

	const submit2 = async (qTitle, qBody) => {
		await postData(qTitle, qBody);
	};

	return { data, loading, error, submit2 };
};
