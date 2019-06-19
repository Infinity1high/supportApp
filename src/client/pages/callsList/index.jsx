import React , {Component}from "react";
import {Table, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import { compose } from 'redux';
import { connect } from 'react-redux';
import Layout from '../../common/Layout';
import {getAllCalls} from "../../store/actions/GetCallsAction";

const renderCalls = (calls) => calls.map(call=>
   <tr style={{height: 50}}>
     <th>{call.customer_id}</th>
     <th>{call.email}</th>
     <th>{call.client_type}</th>
     <th>{call.call_reason}</th>
     <th>{call.date}</th>
     <th>{call.time_duration}</th>
  </tr>)


const renderPagination = (totalCalls, navigate) => {
  const pages = Math.ceil(totalCalls/20);
  const displayedPages = pages > 5 ? 5 : pages;
  return [...Array(displayedPages)].map((page, index) =>
        <PaginationItem>
            <PaginationLink onClick={() => navigate({search: `?page=${index+1}`})}>
                {index+1}
            </PaginationLink>
        </PaginationItem>
    )
}

class CallListPage extends Component {

    state = {
        page: this.props.location.search.split('=')[1] || 1
    }

  componentDidMount() {
      this.props.getAllCalls(this.props);
  }

    render() {
        const page = this.props.location.search.split('=')[1] || 1
        return (
            <Layout>
              <Table style={{marginTop: 20}} striped key={page}>
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Client type</th>
                  <th>Reason</th>
                  <th>Date</th>
                  <th>Duration of call</th>
                </tr>
                </thead>
                <tbody>
                {this.props.result && this.props.result.calls &&  renderCalls(this.props.result.calls)}
                </tbody>
              </Table>
                {this.props.result && this.props.result.totalItems && this.props.result.totalItems > 20 &&
                    <Pagination size="sm" aria-label="Page navigation example">
                        {renderPagination(this.props.result.totalItems, this.props.history.push)}
                    </Pagination>
                }
            </Layout>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.GetCallReducer
    }
}

export default compose(
    connect(mapStateToProps, { getAllCalls }),

)(CallListPage);

