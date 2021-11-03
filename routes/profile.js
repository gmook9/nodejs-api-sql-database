const profileController = require('../controller/profile-controller');
const profileRouter = require('koa-router')({
    prefix: '/profile'
});

profileRouter.get('/', profileController.viewNumberProfiles);
profileRouter.put('/:user_id', profileController.updateEmail);
profileRouter.post('/', profileController.insertNonEduStudent);

module.exports = profileRouter;
