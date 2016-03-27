import React from 'react';
import SearchBar from 'react-search-bar';

class MatcherAutoCompleterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount() {
  	this.loadHosts();
  }

  loadHosts(search) {
  	var url = (search === undefined) ? 'unfilitered' : 'name-like-a';
  	$.ajax({
  		url: 'fixtures/hosts-' + url + '.json',
  		data: {search: search},
  		dataType: 'json',
  		cache: false,
  		success: function(data) {
  			this.setState({ data: data.results.map(host => {return host.name}) });
  		}.bind(this),
  		error: function(xhr, status, err) {
  			console.error(this.props.url, status, err.toString());
  		}.bind(this)
  	});

  }

  handleInputChange(input,resolve) {
  	console.log('input changed to', input);
  	this.loadHosts('name ~ ' + input)
  	resolve(this.state.data,18 )
  }
 

  render() {

  	return(

  		<SearchBar
	  		options={ this.state.data }
	  		placeholder='Search...'
	  		// value={this.state.value}
	  		onChange={this.handleInputChange}
	  		max={ 10 }
  		/>
  		);
  }

}
export default MatcherAutoCompleterComponent;
