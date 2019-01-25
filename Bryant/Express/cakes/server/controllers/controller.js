const Cake = require('../models/cake');

module.exports = {

	all: function(req,res){
		Cake.find({}, function(err, names){
			if (err){
				res.json({message: "Error", error: err})
			}
			else {
				res.json({message: "Success", data: names})
			}
		})
	},

	show: function(req,res){
		Cake.findById(req.params.id,
				   function(err,cake){
				   		if (err){
				   			res.json({message: "Error getting cake"});
				   		}
				   		else{
				   			res.json({message: 'Here is the cake to be completed:', data: cake})
				   		}
				   });	
	},

	create: function(req,res){
		var cake = new Cake({baker: req.body.baker, imgurl: req.body.imgurl});
		cake.save(function(err) {
    		if(err) {
    			console.log("Error Cake");
      			res.json({message: "Error Adding Cake"});
    		} 
    		else {
				res.json({message: "Successfully Added", data: cake});
    		}
		});
	},

	rate: function(req, res){
		var rating = Cake.UpdateOne({_.id: req.params.id}, {$set:{(rating: req.body.rating, review: req.body.review}})
		cake.save(function(err) {
    		if(err) {
    			console.log("Error Rating");
      			res.json({message: "Error Rating Cake"});
    		} 
    		else {
    			res.json({message: "Successfully Rated", data: rating})
    		}
		});
	},

	// update: function(req,res){
	// 	var cake = Cake.update({_id: req.params.id}, 
	// 							   {title: req.body.title, desc: req.body.desc},
	// 							   function(err, cake){
	// 									if(err) {
    //   											res.json({message: "Error Updating Cake"});
    // 									} 
    // 									else {
    // 											res.json({message: "Cake Updated Successfully", data:cake})
    // 									}
	// 							    });
	// },

	destroy: function(req,res){
		Cake.remove({_id: req.params.id}, 
					function(err){
						if (err){
							res.json({message: "Error destroying cake"});

						}
						else {
							res.json({message: "Cake Successfully Removed"});
						}
					}
		);
	},
}