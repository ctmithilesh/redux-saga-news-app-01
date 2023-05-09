import { call, put, takeEvery } from 'redux-saga/effects'
import { getEntNewsSuccess } from '../reducers/entReducer'
import axios from 'axios'
const apiKey = '5497647da2114041ad647eba8e002d6f'
function* fetchEntNews(){

        const news = yield call(()=> axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`))
        const data = news.data.articles
        console.log(data)
        yield put(getEntNewsSuccess(data))
}
function* entertainmentSaga(){
    yield takeEvery('entertainment/getEntNews',fetchEntNews)
}
export default entertainmentSaga;