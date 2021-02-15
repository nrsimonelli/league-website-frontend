import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  try{

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }

    const response = yield axios.get('/auth', config);

    yield put({ type: 'SET_USER', payload: response.data });

  } catch (error) {
    console.log('user get request failed', error);
  }
} 

function* logoutUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session
    yield axios.post('/auth/logout', config);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: 'UNSET_USER' });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('LOGOUT', logoutUser);
}


export default userSaga;