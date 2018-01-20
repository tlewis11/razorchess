import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Square extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	const { color } = this.props;

	var square_style = { 
							width:'400px', 
							height:'400px', 
							backgroundColor: color
						}
	return (
		  <div style={square_style}>
			square
		  </div>
    );
  }
}
