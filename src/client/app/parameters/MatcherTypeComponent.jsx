import React from 'react';

class MatcherTypeComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  	return(
	  		<select>
	  		   <option></option>
	  		   <option value="owner">owner</option>
	  		   <option value="fqdn">fqdn</option>
	  		   <option value="hostgroup">hostgroup</option>
	  		   <option value="os">os</option>
	  		   <option value="domain">domain</option>
  		   </select>

  		);
  }

}
export default MatcherTypeComponent;
