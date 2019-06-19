import react , {Component}from "react";
import {Table} from "reactstrap";
import { compose } from 'redux';
import { connect } from 'react-redux';

const renderCalls = (calls) => (
  calls.map(call=> (
   <tr>
     <th>{call.customer_id}</th>
     <th>{call.email}</th>
     <th>{call.client_type}</th>
     <th>{call.call_reason}</th>
     <th>{call.date}</th>
     <th>{call.time_duration}</th>
  </tr> )
  )

class CallListPage extends Component {

    render() {
        return (
          <Table>
            <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Clinet type</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Duration of call</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>

        )
    }
}


export default compose(
  connect()

)(renderCalls)

