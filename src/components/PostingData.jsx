import PostForm from "../PostForm";
import { useState } from "react";
import { usePost } from "../hooks/usePost";
const PostingData = () => {
	const [showForm, setShowForm] = useState(true);

	return showForm ? <PostForm usePost={usePost} /> : null;
};

export default PostingData;
