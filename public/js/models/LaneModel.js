
'use strict';

var Backbone = require('backbone');


var LaneModel = Backbone.Model.extend({
	urlRoot: "/lanes",
	idAttribute: 'id'
});

module.exports = LaneModel;
