"use strict";

var _ = require('Underscore');
var Backbone = require('backbone');

var TagsListView = Backbone.View.extend({
	el: '<ul></ul>',
	template: _.template('\
		<% tags.each(function(tags) {%>\
			<li><a href="#"><%=tags.get("name") %></a></li>\
			<% }) %>\
	'),
	initialize: function () {
		this.listenTo(this.collection, 'update', this.render)
	},

	render: function(){
		this.template({tags:this.collection});
		return this;
	}

});

module.exports = TagsListView;