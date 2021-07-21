const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.route('/')
  .get(controller.getAllEntries)
  .post(controller.addOneEntry);

router.route('/:id')
  .get(controller.getOneEntry)
  .put(controller.updateOneEntry)
  .patch(controller.updateOneEntry)
  .delete(controller.deleteOneEntry);

module.exports = router;