const router = require('express').Router();
const userControllers = require('../controllers/userControllers'); 
const sourceControllers = require('../controllers/sourceControllers')

router.route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser); 

router.route('/:userID/')
  .post(sourceControllers.createSourceAndUpdate); 

module.exports = router;
  