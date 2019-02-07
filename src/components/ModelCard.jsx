import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/model-card.scss';
import { SelectModel } from '../contexts/SelectModelContext';

class ModelCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { email } = this.props;
    const { selectModel } = this.context;
    selectModel(email);
  }

  render() {
    const { firstName, lastName, _id } = this.props;
    const { selectModel } = this.context;
    return (
      <React.Fragment>
        {selectModel instanceof Function ? (
          <button type="submit" onClick={this.handleClick}>
            {firstName}
            {' '}
            {lastName}
          </button>
        ) : (
          <Link to={`${_id}`}>
            {firstName}
            {' '}
            {lastName}
          </Link>
        )}
      </React.Fragment>
    );
  }
}

ModelCard.contextType = SelectModel;

ModelCard.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
export default ModelCard;
