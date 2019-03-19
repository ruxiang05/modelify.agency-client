import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/model-card.scss';
import { SelectModel } from '../contexts/selectModelContext';
import { ReactComponent as UnknownUserIcon } from '../assets/icons/user-circle.svg';

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
    const { name, _id } = this.props;
    const { selectModel } = this.context;
    const cardContent = (
      <div className="model-card">
        <UnknownUserIcon />
        <p>{name}</p>
      </div>
    );
    return (
      <React.Fragment>
        {selectModel.length ? (
          <button type="submit" onClick={this.handleClick}>
            {cardContent}
          </button>
        ) : (
          <Link to={`${_id}`}>{cardContent}</Link>
        )}
      </React.Fragment>
    );
  }
}

ModelCard.contextType = SelectModel;

ModelCard.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
export default ModelCard;
