'use strict';

var Backbone = require('backbone');
var TagModel = require('../models/TagModel.js');


var TagsCollection = Backbone.Collection.extend({
	url:"/tags",
	Model: TagModel
});

module.exports = TagsCollection;