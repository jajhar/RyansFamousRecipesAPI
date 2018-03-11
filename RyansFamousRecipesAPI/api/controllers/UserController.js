/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	// getUserID: function (req, res, cb) {
    
 //    	// Fetch the recipes from the DB here
 //    	User.find().exec(function(err, recipes) {

 //    		if (err) {
	// 	        return res.serverError(err);
 //    		}

 //    		return res.json(users);
 //    	});
 //    },

    createUserID: function (req, res, cb) {

		// Make a new recipe object and throw it in the DB    
		var userJSON = req.params.all()

    	User.create(userJSON).exec(function (err, newUser) {

    		if (err) {
		        return res.serverError(err);
    		}
			
			return res.json(newUser);		
    	});
    }
};

