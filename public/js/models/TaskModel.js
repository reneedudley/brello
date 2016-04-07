'use strict';
var Backbone = require('backbone');


var TaskModel = Backbone.Model.extend({
	urlRoot:"/tasks",
	idAttribute: 'id',
	parse: function(response){
		if(response.tag){
			response.tag = new TagModel(response.tag)
		}
		return response
	}
});

module.exports = TaskModel;