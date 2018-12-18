import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadJob } from '../actions/jobActions'

class Job extends React.Component {
  
  loadJobs = () => {
     this.props.loadJob();
  };
  
  render() {
      return(
        <div>
            <Link to="/">Index Page</Link>
            
            <br/>
            <button onClick={this.loadJobs}>Load Jobs</button>   
            <br/>
            
            <ul>
            {this.props.jobs.map((job, index) => {
              return <li key={index}>{job.title}</li>
            })}
          </ul>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
    jobs: state.jobs
});


//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadJob }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(Job);


