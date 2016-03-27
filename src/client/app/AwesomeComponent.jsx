import React from 'react';
import C3Chart from 'c3-react';
// const C3Chart = require("c3Chart.jsx");

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    var data = [
      {
        key: "dataSource1",
        values: [ {label: "A", value: this.props.likeCount}, {label: "B", value: this.state.likesCount} ]
      },
      {
        key: "dataSource2",
        values: [{label: "X", value: 7}, {label: "Y", value: 8} ]
      }
    ]
    var type = "bar" // {"line","bar","pie", "multiBar","lineBar"}

    var options = []
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div>
          <button onClick={this.onLike}>Like Me</button>
       </div>
        <div>
          <C3Chart data={data} type={type} options={options}/>
        </div>
      </div>

    );
  }

}

export default AwesomeComponent;
