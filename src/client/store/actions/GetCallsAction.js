const URL = 'http://localhost:8080';

export const GET_CALLS = 'GET_CALLS';
export const GET_CALLS_ERROR = 'GET_CALLS_ERROR';

export function saveCall({
                             customerId, timeStart, timeEnd, platform, reason, email, comment, language, time
                         }, callback) {
    console.log(reason);
    return (dispatch) => {
        fetch(`${URL}/calls`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => JSON.stringify(res.body))
            .then((res) => {
                console.log(res);
                dispatch({
                    type: SAVE_CALL,
                });
                callback();
            })
            .catch((err) => {
                dispatch({
                    type: SAVE_CALL_ERROR,
                    payload: err,
                });
            });
    };
}
