import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';
import { ReactComponent as DateIcon } from '../assets/icons/calendar-day.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/map-marker-alt.svg';
import { ReactComponent as NoteIcon } from '../assets/icons/sticky-note.svg';
import { ReactComponent as PoundIcon } from '../assets/icons/pound-sign.svg';
import '../styles/job.scss';
import api from '../api';
import { getToken } from '../auth';
import { UserContext } from '../contexts/userContext';

class Job extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
    };

    this.acceptJob = this.acceptJob.bind(this);
    this.completeJob = this.completeJob.bind(this);
    this.declineJob = this.declineJob.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { status } = location.state;
    this.setState({ status });
  }

  acceptJob() {
    const { location } = this.props;
    const { _id: id } = location.state;
    api.jobs.acceptJob(getToken(), { id }).then((res) => {
      const { status } = res.job;
      this.setState({ status });
    });
  }

  completeJob() {
    const { location } = this.props;
    const { _id: id } = location.state;
    api.jobs.completeJob(getToken(), { id }).then((res) => {
      const { status } = res.job;
      this.setState({ status });
    });
  }

  declineJob() {
    const { location } = this.props;
    const { _id: id } = location.state;
    api.jobs.declineJob(getToken(), { id }).then((res) => {
      const { status } = res.job;
      this.setState({ status });
    });
  }

  render() {
    const { location, history } = this.props;
    const {
      title, date, address, description, pay,
    } = location.state;
    const { status } = this.state;
    const { user } = this.context;
    const formatedDate = new Date(date).toLocaleDateString();
    return (
      <div className="page job">
        <PageHeader title={title} backButton history={history} />
        <h2 className="status">{status}</h2>
        <div className="job-details">
          <ul>
            <li>
              <DateIcon />
              {formatedDate}
            </li>
            <li>
              <LocationIcon />
              {address}
            </li>
            <li>
              <PoundIcon />
              {pay}
            </li>
            <li>
              <NoteIcon />
              {description}
            </li>
          </ul>
        </div>
        {
          user.role === 'model' && (
            <div className="job-actions">
              {status === 'pending' && (
              <>
                <button
                  className="secondary-button"
                  type="button"
                  onClick={this.declineJob}
                >
                                Decline
                </button>
                <button
                  className="primary-button"
                  type="button"
                  onClick={this.acceptJob}
                >
                                Accept
                </button>
              </>
              )}
              {status === 'in progress' && (
              <button
                className="primary-button"
                type="button"
                onClick={this.completeJob}
              >
                            Complete
              </button>
              )}
            </div>
          )
        }
      </div>
    );
  }
}

Job.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

Job.contextType = UserContext;

export default Job;
