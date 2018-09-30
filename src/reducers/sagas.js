import {fork} from 'redux-saga/effects'

const sagas = [
]

function* rootSaga() {
    yield sagas.map(saga => fork(saga));
}
export default rootSaga;