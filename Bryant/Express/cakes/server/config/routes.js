const cake_controller = require('../controllers/controller');

module.exports = function(app){

	app.get('/all', cake_controller.all);
	app.get('/cake/:id', cake_controller.show);
	app.post('/new', cake_controller.create);
	app.post('/rate/:id', cake_controller.rate);
	app.delete('/destroy/:id', cake_controller.destroy);

}