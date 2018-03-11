/**
 * Recipe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  tableName: "Recipe",

  attributes: {

  	"name": {
  		type: 'string',
  		required: true
  	},

  	"description": {
  		type: 'string',
  		required: true
  	},

  	"userID": {
  		type: 'string'
  	},

  	"image": {
  		type: 'string'
  	},

	"instructions": {
  		type: 'array',
  		defaultsTo: []
  	}
  }
};

