/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getRecipes: function (req, res, cb) {
    
    	// Fetch the recipes from the DB here.

      return res.json({
		    "recipes" : [
		                 {
		                 "name" : "Beef Wellington",
		                 "description" : "Juicy beef wrapped in a not-so-juicy crusted bread.",
		                 "user" : "BeefWillingtonLover",
		                 "image" : "BeefWellington",
		                 "instructions" : [
		                                   {"title" : "STEP 1",
		                                   "image" : "Picasso1",
		                                   "info" : "INFO 1",
		                                   "ingredients" : "3 tbsp cumin, 4 cup cream, 5 tsp parsley",
		                                   "time" : "8"},
		                                   {"title" : "STEP 2",
		                                   "image" : "Picasso1",
		                                   "info" : "INFO 2",
		                                   "ingredients" : "5 tbsp cumin, 3 cup milk, 2 tsp parsley",
		                                   "time" : "7"},
		                                   {"title" : "STEP 3",
		                                   "image" : "Picasso1",
		                                   "info" : "INFO 3",
		                                   "ingredients" : "4 quarts orange, 11 tsp cinammon, 5 tsp cilantro",
		                                   "time" : "6"},
		                                   ]
		                 },
		                 {
		                 "name" : "Drunken Noodles",
		                 "description" : "Noodles so good, they'll give you a light buzz",
		                 "user" : "NoodlesAnonymous1234",
		                 "image" : "DrunkenNoodles",
		                 "instructions" : [
		                                   {"title" : "STEP 1",
		                                   "image" : "Picasso1",
		                                   "info" : "INFO 1",
		                                   "ingredients" : "3 tbsp cumin, 4 cup cream, 5 tsp parsley",
		                                   "time" : "8"},
		                                   {"title" : "STEP 2",
		                                   "image" : "Picasso1",
		                                   "info" : "INFO 2",
		                                   "ingredients" : "5 tbsp cumin, 3 cup milk, 2 tsp parsley",
		                                   "time" : "7"},
		                                   {"title" : "STEP 3",
		                                   "image" : "Picasso1",
		                                   "info" : "INFO 3",
		                                   "ingredients" : "4 quarts orange, 11 tsp cinammon, 5 tsp cilantro",
		                                   "time" : "6"},
		                                   ]
		                 }
		     ]
		});
    }
};

