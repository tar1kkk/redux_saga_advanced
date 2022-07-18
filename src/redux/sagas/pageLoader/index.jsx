import { apply, call, takeEvery } from "redux-saga/effects";

function* LoadBlogData() {
	const request = yield call(fetch, 'https://swapi.dev/api/vehicles');
	const data = yield apply(request, request.json);

	console.log('blog data', data)
}

export default function* pageLoadBlogData() {
	yield takeEvery('LOAD_BLOG_DATA', LoadBlogData)
};