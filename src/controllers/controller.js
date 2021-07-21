const Model = require('../models/model');

exports.getAllEntries = async (req, res, next) => {
  try {
    const entries = await Model.find();

    res.status(200).json({
      status: 'success',
      results: entries.length,
      data: {
        entries,
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.getOneEntry = async (req, res, next) => {
  try {
    const entry = await Model.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        entry,
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.addOneEntry = async (req, res, next) => {
  try {
    const entry = await Model.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        entry,
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.updateOneEntry = async (req, res, next) => {
  try {
    const entry = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    
    res.status(200).json({
      status: 'succes',
      data: {
        entry,
      }
    });
  } catch (e) {
    console.log(req.params.id);
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.deleteOneEntry = async (req, res, next) => {
  try {
    const entry = await Model.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success'
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
    });
  }
};