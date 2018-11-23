const URL = 'http://localhost:8080';

export const SAVE_CALL = 'SAVE_CALL'
export const SAVE_CALL_ERROR = 'SAVE_CALL_ERROR'

export function saveCall({ customerId, timeStart, timeEnd, platform }) {
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
        time_duration: '',
        operator: '',
        department: '',
        session_code: '',
        customer_id: customerId,
        platform: platform,
        call_reason: '',
        payment_issue: '',
        cancelation_reason: '',
        language: '',
        usage_possibility: '',
        issue_resolved: '',
        email: '',
        comment: '',
        call_result: ''
      })
    })
      .then(res => res.json())
      .then((res) => {
        dispatch({
          type: SAVE_CALL,
        });
      })
      .catch((err) => {
        dispatch({
          type: SAVE_CALL_ERROR,
          payload: err,
        });
      });
  };
}
