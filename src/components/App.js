import React , {PropTypes}  from 'react';
import Header from './common/Header.js';
import {connect} from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header 
          loading={this.props.loading}
        />
        {this.props.children}
      </div>  
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownPros) {
  return {
    loading: state.numAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);