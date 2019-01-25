import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterStatus, visibilityFilters } from '../actions';
import FilterItem from '../components/FilterItem';

class TodoFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'All'
    };

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(value) {
    this.setState({
      status: value
    });
    this.props.setFilterStatus(value);
  }

  render() {
    return (
      <div 
        className="filter-container" 
        style={{ 'display': 'flex', 'marginTop': '20px' }}
      >
        Show: 
        <FilterItem 
          value={ visibilityFilters.SHOW_ALL }
          text="All"
          status={ this.state.status } 
          onChange={ this.changeStatus }
        ></FilterItem>
        <FilterItem 
          value={ visibilityFilters.SHOW_ACTIVE }
          text="Active" 
          status={ this.state.status } 
          onChange={ this.changeStatus }
        ></FilterItem>
        <FilterItem 
          value={ visibilityFilters.SHOW_COMPLETED }
          text="Completed" 
          status={ this.state.status } 
          onChange={ this.changeStatus }
        ></FilterItem>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setFilterStatus: (id, value) => setFilterStatus(id, value)
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoFilter);