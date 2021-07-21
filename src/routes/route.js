const express = require('express');

const controller = require('../controllers/controller');
const authorize = require('../middleware/userMiddleware');

const router = express.Router();

router
  .route('/')
  .get(authorize, controller.getAllEntries)
  .post(authorize, controller.addOneEntry);

router
  .route('/:id')
  .get(authorize, controller.getOneEntry)
  .put(authorize, controller.updateOneEntry)
  .patch(authorize, controller.updateOneEntry)
  .delete(authorize, controller.deleteOneEntry);

module.exports = router;