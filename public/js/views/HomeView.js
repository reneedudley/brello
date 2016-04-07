"use strict";

var Backbone = require('backbone');
var TagsListView = require('./TagsListView.js');
var TagsCollection = require('../collections/TagsCollection.js');
var TaskListView = require('./TasksListView.js');
var TasksCollection = require('../collections/TasksCollection.js');

var HomeView = Backbone.View.extend({
	el: '\
	<div class="container">\
		<div class="row">\
			<div class="three column" id="alltags">\
			</div>\
			<div class="three column" id="alltasks">\
			</div>\
			<div class="three column">\
			</div>\
			<div class="three column">\
			</div>\
		</div>\
	</div>\ ',

	insertTags: function (){
		var tags = new TagsCollection();
		tags.fetch();
		var tagsListView = new TagsListView({
			collection: tags
		});
		tagsListView.render();
		$('#alltags').html(tagsListView.el);
		return this;
	},

	insertTasks: function(){
		var tasks = new TasksCollection();
		tasks.fetch();
		var tasksListView= new TaskListView({
			collection: tasks
		});
		tasksListView.render();
		$('#alltasks').html(tasksListView.el);
		return this;
	},

	render:function(){
		this.insertTags();
		this.insertTasks();
		
	}
});

module.exports = HomeView;
