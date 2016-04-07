"use strict";

var _ = require('Underscore');
var Backbone = require('backbone');

var TasksListView = Backbone.View.extend({
	el: '<ul></ul>',
	template: _.template('\
		<% tasks.each(function(post) {%>\
			<li><a href="#"><%= tasks.get("description") %></a>\
				<% if (tasks.get("tag")) { %>\
					<small><%= tasks.get("tag").get("name") %></small>\
				 <% } %>\
			</li>\
			<% }) %>\
	'),

	initialize: function () {
		this.listenTo(this.collection, 'update', this.render)
	},
	
	render: function(){
		this.template({tasks:this.collection});
		return this;
	}

});

module.exports = TasksListView;