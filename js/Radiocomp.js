
var React = require('react');
var RadioItems = require('./RadioItems');
var RadioStore = require('./RadioStore.js');
var RadioActions = require('./RadioActions.js');

var Radiocomp = React.createClass({

	getInitialState: function(){
        return RadioStore.model;
    },

    onModelChange: function(model) {
        this.setState(model);
    },

    componentDidMount: function() {
	this.unsubscribe = RadioStore.listen(this.onModelChange);
	},

	componentWillUnmount: function() {
	this.unsubscribe();
	},

	
	onItemSelectHandler:function(val) {
		//this.setState({rval:val});
		console.log("Radiocomp1",val);
		RadioActions.selectItem(val);
	},


	render:function () {

				return(<div>YOU HAVE SELECTED THE ITEM {this.state.selectedval}
				      		 {this.props.items.map((item)=>{
								return(<RadioItems key={item} itm={item} onSelectedItem={this.onItemSelectHandler}/>);
							 })}
			   		  </div>);
	}

});

module.exports = Radiocomp;