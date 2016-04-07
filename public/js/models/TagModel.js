'use strict';
var Backbone = require('backbone');

var TagModel = Backbone.Model.extend({
	urlRoot:"/tags",
	idAttribute:'id'
});

module.exports = TagModel;