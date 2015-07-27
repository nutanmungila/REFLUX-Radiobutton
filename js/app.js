var React = require('react');
var Radiocomp = require('./components/Radiocomp');

var App = React.createClass({

 		  
 		  render:function() {
			return(
				<div>
					<Radiocomp items={this.props.itemList} />
				</div>
			  );
 		  }


});

App.propTypes = {itemList : React.PropTypes.array.isRequired};
App.defaultProps = {itemList : ["RED","GREEN","BLUE"]};

React.render(<App />,document.getElementById("div-bx"));