'use strict';

var Reflux = require('reflux');
var RadioActions = require('../actions/RadioActions.js');

var defaultModel = {
	selectedval:"",
	text:"initial-val"
};

var RadioStore = Reflux.createStore({

	model: defaultModel,
	listenables: RadioActions,

	onSelectItem: function(item) {
		this.model.selectedval = item;
		this.model.text = "changed nutan";
		this.trigger(this.model);
	}

});


module.exports = RadioStore;