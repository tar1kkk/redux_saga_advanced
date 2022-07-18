import { call, fork, spawn, all, delay } from 'redux-saga/effects';

function* auth() {
	yield delay(2000);
	console.log('auth');
	return true;
}

function* loadUsers() {
	const request = yield call(fetch, 'http://swapi.dev/api/people');
	const data = yield call([request, request.json]);

	console.log(data)
}

export function* loadBasicData() {
	yield all([
		fork(auth),
		fork(loadUsers)
	])
}
