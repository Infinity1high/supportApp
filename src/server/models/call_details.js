const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoosePaginate = require('mongoose-paginate');

const UserModel = require('./user');

const callDetailsSchema = Schema({

  client_type: {
    type: String,
  },
  time_start: {
    type: Date,
  },
  time_end: {
    type: Date,
  },
  time_duration: {
    type: String,
  },
  operator: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  department: {
    type: String
  },
  session_code: {
    type: String
  },
  customer_id: {
    type: String
  },
  platform: {
    type: String
  },
  call_reason: {
    type: String
  },
  payment_issue: {
    type: String
  },
  cancellation_reason: {
    type: String
  },
  language: {
    type: String
  },
  usage_possibility: {
    type: String
  },
  issue_resolved: {
    type: String
  },
  email: {
    type: String
  },
  comment: {
    type: String
  },
  call_result: {
    type: String
  }
});

// callInfoSchema.plugin(mongoosePaginate);

const CallDetailsModel = mongoose.model('callDetails', callDetailsSchema);

module.exports = CallDetailsModel;
