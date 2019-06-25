const config = require("../config");
const Call = require("../models/call_details");

class callRepository {
  static addCall(req, res, next) {
    const data = req.body;
    console.log(data);

    const call = new Call(data);
    call.save(err => {
      if (err) {
        return next(err);
      }
      res.send(201);
    });
  }

  static editCall(req, res, next) {
    const data = req.body;

    // const call = new Call(data);
    // call.save(err => {
    //   if (err) {
    //     return next(err);
    //   }
    // });
  }

  static getCalls(req, res) {
    if (req.query.params) {
      Call.findOne({ _id: req.body.id })
        .then(document => res.send(document))
        .catch(err => res.send(err));
    } else {
      const page = req.query && req.query.page && req.query.page * 20 - 20;
      Call.find({})
        .limit(20)
        .skip(page || 0)
        .then(async documents => {
          const totalItems = await Call.count({});
          res.send({ list: documents, totalItems });
        })
        .catch(err => res.send(err));
    }
  }

  static removeCall(req, res) {
    Call.remove({ _id: req.body.id })
      .then(value => res.send(req.body.id))
      .catch(err => res.send(err));
  }
}

module.exports = callRepository;
