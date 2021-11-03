const userController = require('../controller/user-controller');
const userRouter = require('koa-router')({
    prefix: '/user'
});

// the semicolon is used to represent a location that can intake many arguments,
// for instance, ANY matching username can be typed in the get route below

userRouter.get('/:username', userController.getStudentID);
userRouter.post('/', userController.insertAUser);
userRouter.delete('/:student_id', userController.deleteUser);
userRouter.put('/:user_id', userController.updateUser);


module.exports = userRouter;
