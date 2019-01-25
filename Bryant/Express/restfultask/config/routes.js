const task_controller = require('../controllers/controller');

module.exports = function(app){

	app.get('/all', task_controller.all);
	app.get('/task/:id', task_controller.show);
	app.post('/new', task_controller.create);
	app.put('/edit/:id/', task_controller.update);
	app.delete('/destroy/:id', task_controller.destroy);

}