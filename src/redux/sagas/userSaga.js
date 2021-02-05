import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  try{

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }

    const response = yield axios.get('/auth/', config);

    yield put({ type: 'SET_USER', payload: response.data });

  } catch (error) {
    console.log('user get request failed', error);
  }
} 

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}


export default userSaga;