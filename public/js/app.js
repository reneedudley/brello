'use strict';

'use strict';
var $ = window.$ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var HomeView = require('./views/HomeView.js');
var $ = window.$ = window.jQuery = require('jquery');

$(function($){
	$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});


	var homeView = new HomeView();
	homeView.render();
	$('#content').html(homeView.el);
});


