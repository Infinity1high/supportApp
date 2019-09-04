import React, { Component } from "react";
import {
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import Layout from "../../common/Layout";
import { getAllCalls } from "../../store/actions/GetCallsAction";
import { removeCall } from "../../store/actions/CallActions";
import { reduxForm, registerField, reset } from "redux-form"
import TextField from "../../common/TextField";
import moment from "../callForm/Form";

const renderCalls = (calls, openModal, remove, toggle, selectCall) =>
  calls.map(call => (
    <tr style={{ height: 50 }}>
      <th onClick={() => toggle(call)}>{call.customer_id}</th>
      <th onClick={() => toggle(call)}>{call.email}</th>
      <th onClick={() => toggle(call)}>{call.client_type}</th>
      <th onClick={() => toggle(call)}>{call.call_reason}</th>
      <th onClick={() => toggle(call)}>{call.date}</th>
      <th onClick={() => toggle(call)}>{call.time_duration}</th>
      <th style={{ cursor: "pointer" }} onClick={() => remove(call._id)}>
        <i className="fa fa-trash" />
      </th>
    </tr>
  ));

const renderPagination = (totalCalls, refetchCalls) => {
  const pages = Math.ceil(totalCalls / 20);
  const displayedPages = pages > 5 ? 5 : pages;
  return [...Array(displayedPages)].map((page, index) => (
    <PaginationItem>
      <PaginationLink onClick={() => refetchCalls(index + 1)}>
        {index + 1}
      </PaginationLink>
    </PaginationItem>
  ));
};

class CallListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      call: {}
    };
  }

  toggleModal = (call) => this.setState({ modal: !this.state.modal, call });

  componentDidMount() {
    const page = this.props.location.search.split("=")[1] || 1;
    this.props.getAllCalls(page);
  }

  refetchCalls = page => {
    this.props.history.push({ search: `?page=${page}` });
    this.props.getAllCalls(page);
  };

  render() {
    const { location } = this.props;
    let params = new URLSearchParams(location.search);
    const page = location.search.split("=")[1] || 1;
    return (
      <Layout>
        <Table style={{ marginTop: 20 }} striped key={params}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Client type</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Duration of call</th>
              <th>Remove call</th>
            </tr>
          </thead>
          <tbody>
            {this.props.result &&
              this.props.result.calls &&
              renderCalls(
                this.props.result.calls,
                null,
                this.props.removeCall,
                this.toggleModal
              )}
          </tbody>
        </Table>
        {this.props.result &&
          this.props.result.totalItems &&
          this.props.result.totalItems > 20 && (
            <Pagination size="sm" aria-label="Page navigation example">
              {renderPagination(
                this.props.result.totalItems,
                this.refetchCalls
              )}
            </Pagination>
          )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit call</ModalHeader>
          <ModalBody>
            <TextField name="email" label="Email" />
            <TextField name="customerId" label="Customer ID" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.GetCallReducer
  };
};

export default compose(
  connect(
    mapStateToProps,
    { getAllCalls, removeCall }
  ),
    connect((state, props) => ({
      form: "editCall",
      initialValues: {
        email: state.call && state.call.email || "",
        customerId: state.call && state.call.customer_id || ""
      }
      // onSubmit: (formProps, callback) =>
      //     props.saveCall(
      //         {
      //           ...formProps,
      //           timeStart: props.time.startTime
      //               ? moment(props.startTime).toISOString()
      //               : null,
      //           timeEnd: props.time.endTime
      //               ? moment(props.endTime).toISOString()
      //               : null,
      //           time: props.time.time ? props.time.time : null,
      //           client_type: props.isOldUser ? "old" : "new"
      //         },
      //         callback
      //     )
    })),
    reduxForm({
      asyncBlurFields: []
    })
)(CallListPage);
