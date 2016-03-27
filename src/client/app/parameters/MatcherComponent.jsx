import React from 'react';

import MatcherTypeComponent from './MatcherTypeComponent.jsx'
import MatcherAutoCompleterComponent from './MatcherAutoCompleterComponent.jsx'

class MatcherComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  	return(
  		<div className="matcher-group">
	  	  <MatcherTypeComponent />	
	  		<span> = </span>
        <MatcherAutoCompleterComponent />
  		</div>

  		);
  }

}
export default MatcherComponent;
