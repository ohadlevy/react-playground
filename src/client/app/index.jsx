import React from 'react';
import {render} from 'react-dom';
import 'patternfly/dist/css/patternfly.min.css';
import 'patternfly/dist/css/patternfly-additions.min.css';

require('expose?$!expose?jQuery!jquery');

import MatcherComponent from './parameters/MatcherComponent.jsx'

class App extends React.Component {
  render () {
    return (
    	 <div>
    	   <p> Hello React</p>
    	   <MatcherComponent />
    	 </div>
    	 );
  }
}

render(<App/>, document.getElementById('app'));
