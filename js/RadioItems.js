'use strict';
var React = require('react');

var RadioItems = React.createClass({

	onClickRadio:function () {
		this.props.onSelectedItem(this.props.itm);
	},

	render:function () {
		return(<div>
				<input type="radio" name="sex" value="male" onClick={this.onClickRadio}/>{this.props.itm}
			  </div>);
	}
});

module.exports = RadioItems;