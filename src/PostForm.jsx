import { useState } from "react";

function PostForm(props) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [display, setDisplay] = useState(true);
	const { data: posts, loading, error, submit2 } = props.usePost("posts");

	const flip = () => {
		setDisplay((prevValue) => !prevValue);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleBodyChange = (event) => {
		setBody(event.target.value);
	};

	if (display) {
		return (
			<div className="container">
				<br />
				<label className="form-label">Title:&nbsp;</label>
				<input type="text" value={title} onChange={handleTitleChange} />

				<br />
				<label className="form-label">Body:&nbsp;</label>
				<input type="text" value={body} onChange={handleBodyChange} />

				<button
					onClick={() => {
						console.log("before button: ", display);
						submit2(title, body);
						flip();
						console.log("after button: ", display);
					}}
					className="button"
				>
					Submit
				</button>
			</div>
		);
	} else {
		return (
			<div>
				{posts.userID}, {posts.title}, {posts.body}, {posts.id}
				<button
					onClick={() => {
						flip();
						setTitle("");
						setBody("");
					}}
					className="button"
				>
					Go back
				</button>
			</div>
		);
	}
}

export default PostForm;
