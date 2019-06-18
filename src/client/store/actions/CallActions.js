const URL = 'http://localhost:8080';

export const SAVE_CALL = 'SAVE_CALL';
export const SAVE_CALL_ERROR = 'SAVE_CALL_ERROR';

export function saveCall({
  customerId, timeStart, timeEnd, platform, reason, email, comment, language, time
}, callback) {
  console.log(reason);
  return (dispatch) => {
    fetch(`${URL}/call_add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_type: '',
        time_start: timeStart,
        time_end: timeEnd,
        time_duration: time,
        operator: '507f1f77bcf86cd799439011',
        department: 'Support',
        session_code: '',
        customer_id: customerId,
        platform: platform && platform.name || 'undefined',
        call_reason: reason,
        payment_issue: '',
        cancelation_reason: '',
        language,
        usage_possibility: '',
        issue_resolved: '',
        email,
        comment,
        call_result: ''
      })
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
