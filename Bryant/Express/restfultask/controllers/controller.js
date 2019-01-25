const Task = require('../models/task');

module.exports = {

	all: function(req,res){
		Task.find({}, function(err, names){
			if (err){
				res.json({message: "Error", error: err})
			}
			else {
				res.json({message: "Success", data: names})
			}
		})
	},

	show: function(req,res){
		Task.findById(req.params.id,
				   function(err,task){
				   		if (err){
				   			res.json({message: "Error getting task"});
				   		}
				   		else{
				   			res.json({message: 'Here is the task to be completed:', data: task})
				   		}
				   });	
	},

	create: function(req,res){
		var task = new Task({title: req.body.title, desc: req.body.desc});
		task.save(function(err) {
    		if(err) {
    			console.log("Error Task");
      			res.json({message: "Error Adding Task"});
    		} 
    		else {
    			res.json({message: "Successfully Added", data: task})
    		}
		});
	},

	update: function(req,res){
		var task = Task.update({_id: req.params.id}, 
								   {title: req.body.title, desc: req.body.desc},
								   function(err, task){
										if(err) {
      											res.json({message: "Error Updating Task"});
    									} 
    									else {
    											res.json({message: "Task Updated Successfully", data:task})
    									}
								    });
	},

	destroy: function(req,res){
		Task.remove({_id: req.params.id}, 
					function(err){
						if (err){
							res.json({message: "Error destroying task"});

						}
						else {
							res.json({message: "Task Successfully Removed"});
						}
					}
		);
	},
}