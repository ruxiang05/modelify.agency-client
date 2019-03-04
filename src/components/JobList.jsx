import React from 'react';
import JobCard from './JobCard';
import { getToken } from '../auth';
import api from '../api';
import PageHeader from './PageHeader';

class JobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    const token = getToken();
    api.jobs.getJobs(token).then((res) => {
      const { jobs } = res;
      if (jobs) this.setState({ jobs });
    });
  }

  render() {
    const { jobs } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Jobs" />
        <div className="page">
          {jobs.length ? (
            <ul>
              {jobs.map(job => (
                <li key={jobs.indexOf(job)}>
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          ) : (
            <div>No jobs yet</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default JobList;
