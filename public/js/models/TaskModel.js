'use strict';
var Backbone = require('backbone');


var TaskModel = Backbone.Model.extend({
	urlRoot:"/tasks",
	idAttribute: 'id'
});

module.exports = TaskModel;