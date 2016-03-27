import React from 'react';
import {render} from 'react-dom';
import 'patternfly/dist/css/patternfly.min.css';
import 'patternfly/dist/css/patternfly-additions.min.css';

import AwesomeComponent from './AwesomeComponent.jsx';
import EmptyStatecomponent from './EmptyStateComponent.jsx';

class App extends React.Component {
  render () {
    return (
    	 <div>
    	   <p> Hello React</p>
    	   <AwesomeComponent />
    	   <EmptyStatecomponent
    	     header='Empty State Title'
             body='abc'
             />
    	 </div>
    	 );
  }
}

render(<App/>, document.getElementById('app'));
