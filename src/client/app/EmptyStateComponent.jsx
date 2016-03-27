import React from 'react';

class EmptyStateComponent extends React.Component {
  

  render() {
    return (
  <div className="blank-slate-pf">
    <div className="blank-slate-pf-icon">
      <i className="fa fa-rocket"></i>
    </div>
    <h1> {this.props.header} </h1>
    {this.props.body}
    
    <div className="blank-slate-pf-main-action">
      <button className="btn btn-primary btn-lg">
        Main Action
      </button>
    </div>
    <div className="blank-slate-pf-secondary-action">
      <button className="btn btn-default">
        Secondary Action
      </button>
      <button className="btn btn-default">
        Secondary Action
      </button>
      <button className="btn btn-default">
        Secondary Action
      </button>
    </div>
  </div>
    );
  }

}

export default EmptyStateComponent;
