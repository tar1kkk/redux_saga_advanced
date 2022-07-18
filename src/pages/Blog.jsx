import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Blog(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: 'LOAD_BLOG_DATA' });
	}, []);

	return (
		<div>
			BLOG
		</div>
	);
}

export default Blog;