'use strict';

var Backbone = require('backbone');

var PostModel = require('../models/LaneModel.js');


var LanesCollection = Backbone.Collection.extend({
	url: "/lanes",
	Model: LaneModel
});

module.exports = LanesCollection;