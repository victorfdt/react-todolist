import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadJob } from '../actions/jobActions'

class Job extends React.Component {

  loadJobs = () => {
    this.props.loadJob();
  };

  renderData = () => {
    const { loading, error, jobs } = this.props;

    if (loading) {
      return <li>Loading....</li>;
    } else {
      if (error !== "") {
        return <li>{error}</li>;
      } else {
        return jobs.map((job, index) => {
          return <li key={index}>{job.title}</li>
        })
      }
    }
  }
  render() {
    return (
      <div>
        <Link to="/">Index Page</Link>

        <br />
        <button onClick={this.loadJobs}>Load Jobs</button>
        <br />

        <ul>
          {this.renderData()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs.data,
  loading: state.jobs.loading,
  error: state.jobs.error,
});


//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadJob }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(Job);


