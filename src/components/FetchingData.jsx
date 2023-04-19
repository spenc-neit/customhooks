import { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
const FetchingData = () => {
	const { data : posts, loading, error } = useFetch("posts");

	if (error) {
		return <p>An error occurred: {error}</p>;
	}

	if (loading) {
		return <Loading />;
		//if loading is true, then return the element and stop running the code
	}

	return (
		<>
			{posts.length &&
				posts.map((currentPost) => {
					return (
						<div
							style={{ border: "1px solid black", padding: "5px" }}
							key={currentPost.id}
						>
							<p>{currentPost.title}</p>
							<p>{currentPost.body}</p>
						</div>
					);
				})}
		</>
	);
};

export default FetchingData;
