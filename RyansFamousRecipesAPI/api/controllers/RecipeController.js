/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getRecipes: function (req, res, cb) {
    
    	// Fetch the recipes from the DB here
    	Recipe.find().exec(function(err, recipes) {

    		if (err) {
		        return res.serverError(err);
    		}

    		return res.json(recipes);
    	});
    },

    createRecipe: function (req, res, cb) {

		// Make a new recipe object and throw it in the DB    
		var recipeJSON = req.params.all()

    	Recipe.create(recipeJSON).exec(function (err, newRecipe) {

    		if (err) {
		        return res.serverError(err);
    		}
			
			return res.json(newRecipe);		
    	});
    }
};

