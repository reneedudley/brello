'use strict';

console.log("hello"); 

var LaneModel = Backbone.Model.extend({
	urlRoot: "/lanes"
});

var LanesColletction = Backbone.Collection.extend({
	url: "/lanes",
	Model: "LaneModel"
});