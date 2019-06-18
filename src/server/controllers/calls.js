const config = require('../config');
const Call = require('../models/call_details');

class callRepository {

}

exports.add_call = function (req, res, next) {
  const data = req.body;
  console.log(data);

  const call = new Call(data);
  console.log(call);
  call.save((err) => {
    if (err) {
      return next(err);
    }
    res.send(201);
  });
};

exports.edit_call = function (req, res, next) {
  const data = req.body;

  // const call = new Call(data);
  // call.save(err => {
  //   if (err) {
  //     return next(err);
  //   }
  // });
};

exports.get_call = function (req, res, next) {

};

exports.get_all_calls = function (req, res, next) {

};

exports.remove_call = function (req, res, next) {

};
