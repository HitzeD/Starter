import axios from 'axios';

export const FETCH_INFO_START = 'FETCH_INFO_START';
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE';

const DOC_KEY = process.env.USER_KEY;

export const fetchStatus = () => dispatch => {
    dispatch({ type: FETCH_INFO_START })

    axios.get(`https://api.betterdoctor.com/2016-03-01/info?user_key=${DOC_KEY}`)
        .then(res => { dispatch({ type: FETCH_INFO_SUCCESS, payload: res.data })})
        .catch(err => { dispatch({ type: FETCH_INFO_FAILURE, payload: err.response })});
}