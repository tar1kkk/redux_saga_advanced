import { spawn, call, all } from 'redux-saga/effects';
import { loadBasicData } from './initialSagas';
import pageLoadBlogData from './pageLoader';

export default function* rootSaga() {


	const sagas = [loadBasicData, pageLoadBlogData];

	const retrySagas = yield sagas.map(saga => {
		return spawn(function* () {
			while (true) {
				try {
					yield call(saga);
					break;
				} catch (e) {
					console.log(e);
				}
			}
		})
	});

	yield all(retrySagas);
};