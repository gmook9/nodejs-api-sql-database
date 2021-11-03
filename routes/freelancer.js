const freelancerController = require('../controller/freelancer-controller');
const freelancerRouter = require('koa-router')({
    prefix: '/freelancer'
});

// Paths for the router being here
freelancerRouter.get('/:city', freelancerController.getUserNameByCity);
freelancerRouter.post('/', freelancerController.insertProfile);
freelancerRouter.delete('/:username', freelancerController.deleteProfile);

module.exports = freelancerRouter;
