const config = require('../config');
const Call = require('../models/call_details');

class callRepository {

  static addCall (req, res, next) {
    const data = req.body;
    console.log(data);

    const call = new Call(data);
    call.save((err) => {
      if (err) {
        return next(err);
      }
      res.send(201);
    });
  };

  static editCall (req, res, next) {
    const data = req.body;

    // const call = new Call(data);
    // call.save(err => {
    //   if (err) {
    //     return next(err);
    //   }
    // });
  };

  // static getCall(req, res, next) {
  //   Call.findOne()
  // }

  static getAllCalls(req, res) {
    const page = req.query && req.query.page && (req.query.page * 20 - 20);
    Call.find({}).limit(20).skip(page || 0)
        .then(async documents => {
          const totalItems = await Call.count({});
          res.send({list: documents, totalItems})
        })
        .catch(err => res.send(err));
  }
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

module.exports = callRepository;
