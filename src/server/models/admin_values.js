const mongoose = require("mongoose");

const adminValueSchema = mongoose.Schema({
  sales_reasons: {
    type: Array
  },
  cancellation_reasons: {
    type: Array
  },
  payment_issues: {
    type: Array
  },
  support_reasons: {
    type: Array
  },
  languages: {
    type: Array
  }
});

const AdminValuesModel = mongoose.model("adminValues", adminValueSchema);

module.exports = AdminValuesModel;
