import {takeLatest, put} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {searchRequestSuccess, SEARCH_REQUEST} from './searchAction';

const fetchSearch = async (action) => {
  const request = await axios(`${URL_API}/search?q=${action.search}`, {
    headers: {
      Authorization: `bearer ${action.token}`,
    },
  });
  return request.data;
};
function* workerSearch(action) {
  const data = yield fetchSearch(action);
  yield put(searchRequestSuccess(data.data));
}
export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, workerSearch);
}
