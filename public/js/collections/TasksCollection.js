'use strict';

var Backbone = require('backbone');

var TaskModel = require('../models/TaskModel.js');



var TasksCollection = Backbone.Collection.extend({
	url:"/tasks",
	Model: TaskModel
});


module.exports = TasksCollection;